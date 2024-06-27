import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './navUserInfo.css'; // Ensure you have the CSS file imported

const NavUserInfo = () => {
    return (
        <div className="sidebar">
            <NavLink style={{textAlign:'left'}} className="sidebar-link" to="/userinfo/hoso">Profile</NavLink>
            <NavLink style={{textAlign:'left'}} className="sidebar-link" to="/userinfo/nganhang">Bank</NavLink>
            <NavLink style={{textAlign:'left'}} className="sidebar-link" to="/userinfo/doimatkhau">Change Password</NavLink>
            <NavLink style={{textAlign:'left'}} className="sidebar-link" to="/userinfo/thongbao">Notification</NavLink>
            <NavLink style={{textAlign:'left'}} className="sidebar-link" to="/userinfo/lichsumuahang">Purchase History</NavLink>
        </div>
    );
};

export default NavUserInfo;
