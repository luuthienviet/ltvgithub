// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../puplic/SearchBar'; // ✅ ĐÚNG


function Header({ onOpenLogin, onSearch }) {
  return (
    <header className="main-header">
      <div className="logo">Biti's</div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
          <SearchBar onSearch={onSearch} />
          <li><Link to="/register">Đăng Ký</Link></li> 
          <li><Link to="/login" className="login-button-right">Login</Link></li> {/* Sử dụng Link để chuyển hướng */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;