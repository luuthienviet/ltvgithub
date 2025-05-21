import React from 'react';

function LienHe() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">Liên hệ với chúng tôi</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form liên hệ */}
          <form className="space-y-6 bg-gray-100 p-6 rounded-xl shadow-lg">
            <div>
              <label className="block font-semibold">Họ và tên</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block font-semibold">Nội dung</label>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
                placeholder="Viết tin nhắn tại đây..."
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Gửi liên hệ
            </button>
          </form>

          {/* Thông tin liên hệ + bản đồ */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
              <p><strong>Địa chỉ:</strong> 604 Phan Đình Phùng, TP Kon Tum</p>
              <p><strong>Điện thoại:</strong> 02468109888</p>
              <p><strong>Email:</strong> support@ltvshop.vn</p>
              <p><strong>Facebook:</strong> <a href="https://facebook.com/giay2hand" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shop LTV</a></p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=704+Phan+Đình+Phùng,+Kon+Tum&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LienHe;
