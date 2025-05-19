const bcrypt = require('bcrypt');

async function generatePasswordHash() {
  const plainPassword = '123456'; // Thay đổi nếu bạn muốn mật khẩu khác
  const hash = await bcrypt.hash(plainPassword, 10);
  console.log('Hashed password:', hash);
}

generatePasswordHash();
