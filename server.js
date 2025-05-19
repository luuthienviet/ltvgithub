const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==============================
// 📌 Middleware
// ==============================
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ==============================
// 💾 Cấu hình kết nối SQL Server
// ==============================
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// ==============================
// 🔌 Kết nối DB
// ==============================
async function connectDB() {
  try {
    await sql.connect(sqlConfig);
    console.log('✅ Đã kết nối MSSQL thành công');
  } catch (err) {
    console.error('❌ Lỗi khi kết nối DB:', err.message);
  }
}
connectDB();

// ==============================
// 📌 API: Đăng ký
// ==============================
app.post('/api/register', async (req, res) => {
  const {
    firstName,
    lastName,
    birthDay,
    birthMonth,
    birthYear,
    gender,
    emailOrPhone,
    password
  } = req.body;

  if (!firstName || !lastName || !birthDay || !birthMonth || !birthYear || !gender || !emailOrPhone || !password) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await sql.connect(sqlConfig);

    await pool.request()
      .input('FirstName', sql.NVarChar, firstName)
      .input('LastName', sql.NVarChar, lastName)
      .input('BirthDay', sql.Int, birthDay)
      .input('BirthMonth', sql.Int, birthMonth)
      .input('BirthYear', sql.Int, birthYear)
      .input('Gender', sql.NVarChar, gender)
      .input('EmailOrPhone', sql.NVarChar, emailOrPhone)
      .input('Password', sql.NVarChar, hashedPassword)
      .query(`
        INSERT INTO Users (FirstName, LastName, BirthDay, BirthMonth, BirthYear, Gender, EmailOrPhone, Password)
        VALUES (@FirstName, @LastName, @BirthDay, @BirthMonth, @BirthYear, @Gender, @EmailOrPhone, @Password)
      `);

    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (err) {
    console.error('❌ Lỗi khi đăng ký:', err.message);
    res.status(500).json({ message: 'Lỗi máy chủ, vui lòng thử lại sau' });
  }
});

// ==============================
// 📌 API: Đăng nhập
// ==============================
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập tên đăng nhập và mật khẩu' });
  }

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT id, EmailOrPhone, Password FROM Users WHERE EmailOrPhone = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
    }

    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
    }

    res.json({
      message: 'Đăng nhập thành công',
      userId: user.id,
      username: user.EmailOrPhone,
    });
  } catch (err) {
    console.error('❌ Lỗi xử lý login:', err.message);
    res.status(500).json({ message: 'Lỗi máy chủ, vui lòng thử lại sau' });
  }
});

// ==============================
// 📦 Dữ liệu sản phẩm (Mock)
// ==============================
const products = [
  { id: '1', name: 'Giày Chạy Bộ Bitis Hunter Running 2.0 Nam Màu Cam', imageUrl: 'https://product.hstatic.net/1000230642/product/hsm004800cam__2__f063eea92c3f474ebafc7e154ddbdcff_master.jpg', price: 881300 },
  { id: '2', name: 'Giày Thể Thao Bitis Hunter X LiteDash Nam Màu Cam', imageUrl: 'https://i.vietgiaitri.com/2019/11/18/loat-giay-the-thao-trang-duoc-phai-manh-ua-chuong-816417.jpg', price: 799000 },
  { id: '3', name: 'Giày Thể Thao Bitis Hunter Jogging Nam Màu Cam', imageUrl: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/273/716/products/1-dc61a0d0-8121-46f0-b3d2-8f52d878ea3b.jpg', price: 756000 },
  { id: '4', name: 'Giày Chạy Bộ Bitis Hunter Running 2.0 Nam Màu Đen', imageUrl: 'https://product.hstatic.net/1000230642/product/z5434514845467_952bbdea690ec20490265ce82490d436_8242fd81b8a446d7b803c25179204eed_grande.jpg', price: 881300 },
  { id: '5', name: 'Giày Thể Thao Bitis Hunter X LiteDash Nam Màu Trắng', imageUrl: '/images/giay5.png', price: 1099000 },
  { id: '6', name: 'Giày Thể Thao Nam Bitis Hunter Core HSM007800TRG', imageUrl: '/images/giay6.png', price: 797400 },
  { id: '7', name: 'Giày Thể Thao Bitis Hunter Street Nam Màu Nâu', imageUrl: '/images/giay7.png', price: 580300 },
  { id: '8', name: 'Giày Sneaker Unisex Under Armour Slipspeed Mega Fade', imageUrl: '/images/giay8.png', price: 4799000 },
  { id: '9', name: 'Giày thể thao Chạy Bộ Nam On Cloudvista - Xám', imageUrl: '/images/giay9.png', price: 2945000 },
  { id: '10', name: 'Giày Bóng Rổ Nam Nike Giannis Immortality 4 Ep - Đỏ', imageUrl: '/images/giay10.png', price: 2579000 },
];

// ==============================
// 📌 API: Lấy toàn bộ sản phẩm
// ==============================
app.get('/api/products', (req, res) => {
  res.json(products);
});

// ==============================
// 📌 API: Lấy sản phẩm theo ID
// ==============================
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
  }
});

// ==============================
// 🚀 Khởi chạy server
// ==============================
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});
