// src/pages/doimatkhau.js
import React, { useState } from 'react';
import '../css/matkhaumoi.css';
export default function DoiMatKhau() {
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSave = () => {
        // Handle save logic here
        if (passwords.newPassword !== passwords.confirmNewPassword) {
            alert('New passwords do not match.');
            return;
        }
        console.log('Passwords updated:', passwords);
    };

    return (
        <div className="change-password-page">
            <h2>Đổi Mật Khẩu</h2>
            <div className="change-password-form">
                <div className="form-group">
                    <label>Mật khẩu cũ:</label>
                    <input 
                        type="password" 
                        name="oldPassword" 
                        value={passwords.oldPassword} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu mới:</label>
                    <input 
                        type="password" 
                        name="newPassword" 
                        value={passwords.newPassword} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Xác nhận mật khẩu mới:</label>
                    <input 
                        type="password" 
                        name="confirmNewPassword" 
                        value={passwords.confirmNewPassword} 
                        onChange={handleChange} 
                    />
                </div>
                <button onClick={handleSave}>Lưu</button>
            </div>
        </div>
    );
}
