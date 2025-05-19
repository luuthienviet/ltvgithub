import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // thêm dòng này

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    emailOrPhone: '',
    password: '',
  });

  const navigate = useNavigate(); // khởi tạo navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('🎉 Đăng ký thành công!');
        navigate('/login'); // ✅ chuyển trang sang login
      } else {
        alert(`❌ Lỗi: ${data.message || 'Đăng ký thất bại'}`);
      }
    } catch (err) {
      console.error('❌ Lỗi kết nối:', err);
      alert('Lỗi kết nối đến server.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ và tên */}
        <div className="flex gap-4">
          <input type="text" name="lastName" placeholder="Họ" value={formData.lastName} onChange={handleChange} required className="flex-1 p-2 border rounded" />
          <input type="text" name="firstName" placeholder="Tên" value={formData.firstName} onChange={handleChange} required className="flex-1 p-2 border rounded" />
        </div>

        {/* Ngày sinh */}
        <div className="flex gap-4">
          <input type="text" name="birthDay" placeholder="Ngày sinh" value={formData.birthDay} onChange={handleChange} required className="w-1/3 p-2 border rounded" />
          <input type="text" name="birthMonth" placeholder="Tháng sinh" value={formData.birthMonth} onChange={handleChange} required className="w-1/3 p-2 border rounded" />
          <input type="text" name="birthYear" placeholder="Năm sinh" value={formData.birthYear} onChange={handleChange} required className="w-1/3 p-2 border rounded" />
        </div>

        {/* Giới tính */}
        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>

        {/* Email hoặc số điện thoại */}
        <input type="text" name="emailOrPhone" placeholder="Email hoặc số điện thoại" value={formData.emailOrPhone} onChange={handleChange} required className="w-full p-2 border rounded" />

        {/* Mật khẩu */}
        <input type="password" name="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded" />

        {/* Nút đăng ký */}
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
