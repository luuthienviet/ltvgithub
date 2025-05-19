import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white text-sm px-5 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-8">
        {/* VỀ BITI'S */}
        <div className="min-w-[200px] flex-1">
          <h4 className="mb-3 font-bold">VỀ BITI'S</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Câu chuyện Biti's</li>
            <li className="hover:text-white cursor-pointer">Hoạt Động</li>
            <li className="hover:text-white cursor-pointer">Liên hệ</li>
          </ul>
        </div>

        {/* THÔNG TIN */}
        <div className="min-w-[200px] flex-1">
          <h4 className="mb-3 font-bold">THÔNG TIN</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Trạng thái đơn hàng</li>
            <li className="hover:text-white cursor-pointer">Hình thức giao hàng</li>
            <li className="hover:text-white cursor-pointer">Hình thức thanh toán</li>
            <li className="hover:text-white cursor-pointer">Hướng dẫn cách chọn Size</li>
            <li className="hover:text-white cursor-pointer">Chính sách đổi Size</li>
            <li className="hover:text-white cursor-pointer">Chính sách đổi trả</li>
            <li className="hover:text-white cursor-pointer">Chính sách bảo hành</li>
            <li className="hover:text-white cursor-pointer">Chính sách khách hàng thân thiết</li>
            <li className="hover:text-white cursor-pointer">Chính sách bảo vệ thông tin khách hàng</li>
          </ul>
        </div>

        {/* TRỢ GIÚP */}
        <div className="min-w-[200px] flex-1">
          <h4 className="mb-3 font-bold">TRỢ GIÚP</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Tuyển Dụng</li>
            <li className="hover:text-white cursor-pointer">Hệ thống cửa hàng</li>
            <li className="hover:text-white cursor-pointer">Liên hệ hợp tác</li>
            <li className="hover:text-white cursor-pointer">Q&A</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded">
            BÁN HÀNG B2B
          </button>
        </div>

        {/* Company Info */}
        <div className="min-w-[200px] flex-1 text-gray-300">
          <img src="/images/logo-footer.png" alt="Biti's Logo" className="w-28 mb-3" />
          <p className="font-bold text-white">CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</p>
          <p>Địa chỉ: 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh</p>
          <p>Điện thoại: <a href="tel:02838753443" className="text-blue-400 hover:underline">(028) 38 753 443</a></p>
          <p>Email: <a href="mailto:chamsockhachhang@bitis.com.vn" className="text-blue-400 hover:underline">chamsockhachhang@bitis.com.vn</a></p>
          <p>Hotline: <a href="tel:0966158666" className="text-blue-400 hover:underline">0966 158 666</a></p>
          <p>Thời gian tư vấn: 8h – 21h30 (trừ ngày Lễ, Tết)</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4 px-2">
        <p>Copyright © 2025 Biti's. Powered by Haravan Enterprise</p>
        <p className="mt-1">
          Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM
        </p>
      </div>
    </footer>
  );
}

export default Footer;
