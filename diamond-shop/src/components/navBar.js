// import React, { useState } from "react";
// import CallIcon from "@mui/icons-material/Call";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import logo from "../constant/logo.png";
// import { routes } from "../routes";
// import DropContentDiamond from "./dropDownContent/dropContentDiamond";
// import DropContentJewelry from "./dropDownContent/dropContentJewelry";
// import '../css/navBar.css';
// import { Link } from "react-router-dom";
// import { useAuth } from '../components/authcontext';
// import { Button } from "@mui/material";
// import DropdownMenuUser from "./dropdownUser";

// export default function NavBar() {
//   const { user, logout } = useAuth();
//   console.log(user)

//   const [isDiamondDropdownOpen, setIsDiamondDropdownOpen] = useState(false);
//   const [isJewelryDropdownOpen, setIsJewelryDropdownOpen] = useState(false);

//   const handleMouseOverDiamond = () => {
//     setIsDiamondDropdownOpen(true);
//     setIsJewelryDropdownOpen(false);
//   };
//   const handleMouseOverJewelry = () => {
//     setIsDiamondDropdownOpen(false);
//     setIsJewelryDropdownOpen(true);
//   };

//   const handleMouseLeaveDiamond = () => {
//     setIsDiamondDropdownOpen(false);
//   };

//   const handleMouseLeaveJewelry = () => {
//     setIsJewelryDropdownOpen(false);
//   };

//   return (
//     <div className='container'>
//       <div className="container-nav-bar">
//         <div className="nav-bar-header">
//           <div className="nav-bar-header-left">
//             <div className="icon-nav-bar">
//               <CallIcon></CallIcon>
//               <p>1-800-123-4567</p>
//             </div>
//             <div className="icon-nav-bar">
//               <LocationOnIcon className="icon-nav-bar"></LocationOnIcon>
//               <p style={{paddingBottom: 0}}>Stores</p>
//             </div>
//             <div className="icon-nav-bar">
//               <SupportAgentIcon className="icon-nav-bar"></SupportAgentIcon>
//               <p>Virtual Appointment</p>
//             </div>
//           </div>
//           <div className="nav-bar-header-right">
//             <Link to={user ? routes.userInfo : routes.login}>
//               <DropdownMenuUser/>
//             </Link>
//             <FavoriteBorderIcon></FavoriteBorderIcon>
//             <Link to={routes.shoppingCart}>
//               <ShoppingCartIcon></ShoppingCartIcon>
//             </Link>
//             {user && (
//               <Button variant="contained" color="secondary" onClick={logout} style={{ marginLeft: '10px' }}>
//                 Logout
//               </Button>
//             )}
//           </div>
//         </div>

//         <div className="nav-bar-body">
//           <a href={routes.homePage}>
//             <img src={logo} />
//           </a>
//           <a href={routes.homePage} style={{ textDecoration: "none" }}>
//             <h3 style={{ color: 'black' }}>Luxe Jewel House</h3>
//           </a>
//           <div
//             className="nav-bar-item"
//             onMouseEnter={handleMouseOverDiamond}
//             onMouseLeave={handleMouseLeaveDiamond}
//           >
//             <button className="dropdown-toggle">
//               <p>Diamond</p>
//               <KeyboardArrowDownIcon style={{ color: "black" }} />
//             </button>
//             {isDiamondDropdownOpen && (
//               <div className="dropdownWrapper">
//                 <DropContentDiamond />
//               </div>
//             )}
//           </div>
//           <div className="nav-bar-item"
//             onMouseEnter={handleMouseOverJewelry}
//             onMouseLeave={handleMouseLeaveJewelry}
//           >
//             <button className="dropdown-toggle">
//               <p>Jewelry</p>
//               <KeyboardArrowDownIcon style={{ color: "black" }} />
//             </button>
//             {isJewelryDropdownOpen && (
//               <div className="dropdownWrapper">
//                 <DropContentJewelry />
//               </div>
//             )}
//           </div>
//           <div className="nav-bar-item">
//             <p>Wedding Rings</p>
//             <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
//           </div>
//           <div className="nav-bar-item">
//             <p>Education</p>
//             <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../constant/logo.png';
import logotext from '../constant/logo_text.png'
import DropdownMenuUser from './dropdownUser';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { useAuth } from './authcontext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body2">1-800-123-4567</Typography>
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <Typography variant="body2">Stores</Typography>
          <IconButton color="inherit">
            <HeadsetMicIcon />
          </IconButton>
          <Typography variant="body2">Virtual Appointment</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
          {user ? <DropdownMenuUser /> : <Link to={routes.login}><DropdownMenuUser /></Link>}
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit">
            <Link to={routes.shoppingCart}>
              <ShoppingCartIcon />
            </Link>
          </IconButton>
        </Box>
      </Toolbar>
      <Toolbar style={{ justifyContent: 'left' }}>
        <Box display="flex" alignItems="center" >
          <Link to={routes.homePage}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <img src={logotext} alt="Luxe Jewel House" style={{ height: '20px', marginRight: '10px' }} />
          </Link>
        </Box>
        <Box key='Diamond' display="flex" alignItems="center" mx={2}>
          <Typography variant="body1">Diamond</Typography>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box key='Jewelry' display="flex" alignItems="center" mx={2}>
          <Typography variant="body1">Jewelry</Typography>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box key='Engagement Rings' display="flex" alignItems="center" mx={2}>
          <Typography variant="body1">Engagement Rings</Typography>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box key='Wedding Rings' display="flex" alignItems="center" mx={2}>
          <Typography variant="body1">Wedding Rings</Typography>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box key='Education' display="flex" alignItems="center" mx={2}>
          <Typography variant="body1">Education</Typography>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
