// src/pages/hoSo.js
import React, { useState, useEffect } from 'react';
import '../css/hoso.css'
import { useAuth } from '../../authcontext';

export default function HoSo() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    gender: "Nam",
    dob: ""
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('https://localhost:7251/api/Users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, [user.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('https://localhost:7251/api/Users/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(userInfo)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('User information saved:', result);
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  };

  console.log(userInfo)

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
