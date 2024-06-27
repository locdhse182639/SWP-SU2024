import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './navUserInfo.css'; 

const NavUserInfo = () => {
    return (
        <div className="sidebar">
            <NavLink className="sidebar-link" to="/userinfo/hoso">Profile</NavLink>
            <NavLink className="sidebar-link" to="/userinfo/nganhang">Bank</NavLink>
            <NavLink className="sidebar-link" to="/userinfo/doimatkhau">Change Password</NavLink>
            <NavLink className="sidebar-link" to="/userinfo/thongbao">Notification</NavLink>
            <NavLink className="sidebar-link" to="/userinfo/lichsumuahang">Purchase History</NavLink>
        </div>
    );
};

export default NavUserInfo;
