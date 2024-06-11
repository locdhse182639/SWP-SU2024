// src/components/navUserInfo.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
const NavUserInfo = () => {
    return (
        <div className="sidebar">
            <NavLink style={{color:'black'}} to="/userinfo/hoso">Hồ Sơ</NavLink>
            <NavLink style={{color:'black'}} to="/userinfo/nganhang">Ngân Hàng</NavLink>
            <NavLink style={{color:'black'}} to="/userinfo/doimatkhau">Đổi Mật Khẩu</NavLink>
            <NavLink style={{color:'black'}}  to="/userinfo/thongbao">Thông Báo</NavLink>
            <NavLink style={{color:'black'}} to="/userinfo/lichsumuahang">Lịch Sử Mua Hàng</NavLink>
        </div>
    );
};

export default NavUserInfo;
