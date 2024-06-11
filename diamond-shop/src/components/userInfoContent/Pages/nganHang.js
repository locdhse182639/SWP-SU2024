// src/pages/nganHang.js
import React from 'react';
import '../css/nganhang.css'
export default function NganHang() {
    return (
        <div className="bank-link-page">
            <h2>Thẻ Tín Dụng/Ghi Nợ</h2>
            <div className="card-link-section">
                <p>Bạn chưa liên kết thẻ.</p>
                <button className="add-card-button">+ Thêm Thẻ Mới</button>
            </div>
            <hr />
            <h2>Tài Khoản Ngân Hàng Của Tôi</h2>
            <div className="bank-account-link-section">
                <p>Bạn chưa có tài khoản ngân hàng.</p>
                <button className="add-bank-account-button">+ Thêm Tài Khoản Ngân Hàng Liên Kết</button>
            </div>
        </div>
    );
}
