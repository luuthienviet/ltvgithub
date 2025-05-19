import React from 'react';

const Banner = () => {
  return (
    <div className="w-full">
      <div
        className="relative h-[500px] bg-cover bg-center bg-no-repeat text-white flex items-end justify-start px-12 py-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Lớp phủ đen mờ */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        {/* Nội dung chữ */}
        <div className="relative z-10 flex flex-col items-start max-w-[600px] mb-40">
          <h1 className="text-4xl font-bold mb-3">BỘ SƯU TẬM MỚI NHẤT 2025</h1>
          <h2 className="text-2xl mb-2">TẶNG NGAY VOUCHER 500K</h2>
          <p className="text-base leading-relaxed mb-1">
            Áp dụng đến 5/2025 tại website chính hãng
          </p>
          <p className="text-base leading-relaxed">
            Khám phá các mẫu giày mới nhất với chất lượng tốt nhất và giá cả phải chăng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
