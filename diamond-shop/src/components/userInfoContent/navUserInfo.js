// src/components/navUserInfo.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavUserInfo = () => {
    return (
        <div className="sidebar">
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/hoso">Profile</NavLink>
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/nganhang">Bank</NavLink>
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/doimatkhau">Change Password</NavLink>
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/thongbao">Notification</NavLink>
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/lichsumuahang">Purchase History</NavLink>
            <NavLink style={{ color: 'black', textAlign:'left' }} to="/userinfo/tracking">Order Tracking</NavLink>
        </div>
    );
};

export default NavUserInfo;
