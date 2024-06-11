// src/pages/hoSo.js
import React, { useState } from 'react';
import '../css/hoso.css'

export default function HoSo() {
  const [userInfo, setUserInfo] = useState({
    username: "vnkhoanguyn167",
    name: "",
    email: "",
    phoneNumber: "",
    gender: "Nam",
    dob: "1990-01-01"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('User information saved:', userInfo);
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <div className="user-info">
        <div className="form-group">
          <label>Tên đăng nhập:</label>
          <input 
            type="text" 
            name="username" 
            value={userInfo.username} 
            onChange={handleChange} 
            readOnly
          />
          <small>Tên Đăng nhập chỉ có thể thay đổi một lần.</small>
        </div>
        <div className="form-group">
          <label>Tên:</label>
          <input 
            type="text" 
            name="name" 
            value={userInfo.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userInfo.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại:</label>
          <input 
            type="text" 
            name="phoneNumber" 
            value={userInfo.phoneNumber} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Giới tính:</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Nam" checked={userInfo.gender === "Nam"} onChange={handleChange} /> Nam</label>
            <label><input type="radio" name="gender" value="Nữ" checked={userInfo.gender === "Nữ"} onChange={handleChange} /> Nữ</label>
            <label><input type="radio" name="gender" value="Khác" checked={userInfo.gender === "Khác"} onChange={handleChange} /> Khác</label>
          </div>
        </div>
        <div className="form-group">
          <label>Ngày sinh:</label>
          <input 
            type="date" 
            name="dob" 
            value={userInfo.dob} 
            onChange={handleChange} 
          />
        </div>
        <button onClick={handleSave}>Lưu</button>
      </div>
    </div>
  );
}
