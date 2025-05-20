import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../puplic/SearchBar';

function Header({ onSearch }) {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-4xl font-bold text-gray-800 whitespace-nowrap">
        <span className="text-blue-800">L</span>
        <span className="text-orange-500">T</span>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md z-0">

    <div className="flex-1 flex items-center justify-center gap-6">
        {/* Search bar */}
        <div className="w-26 sm:w-30 md:w-33">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
     
      {/* Đăng ký / Login */}
      <div className="flex items-center gap-4 whitespace-nowrap">
        <Link to="/" className="text-black hover:text-rose-600">Trang chủ</Link>
        <Link to="/gioi-thieu" className="text-black hover:text-rose-600">Giới thiệu</Link>
        <Link to="/register" className="text-black hover:text-rose-600">Đăng Ký</Link>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
      </div>
    </header>
  );
}

export default Header;
