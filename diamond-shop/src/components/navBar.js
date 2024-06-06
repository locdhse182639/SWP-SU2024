import React, { Component, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../constant/logo.png";
import { routes } from "../routes";
import DropContentDiamond from "./dropDownContent/dropContentDiamond";
import DropContentJewelry from "./dropDownContent/dropContentJewelry";
import DropContentER from "./dropDownContent/dropContentER";
import '../css/navBar.css'; 

export default function NavBar() {

    const [isDiamondDropdownOpen, setIsDiamondDropdownOpen] = useState(false);
    const [isJewelryDropdownOpen, setIsJewelryDropdownOpen] = useState(false);

    const handleMouseOverDiamond = () => {
      setIsDiamondDropdownOpen(true);
      setIsJewelryDropdownOpen(false);
    };
    const handleMouseOverJewelry = () => {
        setIsDiamondDropdownOpen(false);
        setIsJewelryDropdownOpen(true);
      };
  
    const handleMouseLeaveDiamond = () => {
      setIsDiamondDropdownOpen(false);
    };
   
     const handleMouseLeaveJewelry = () => {
      setIsJewelryDropdownOpen(false);
    };
  
  return (
    <div className='container'>
      <div className="container-nav-bar">
        <div className="nav-bar-header">
          <div className="nav-bar-header-left">
            <div className="icon-nav-bar">
              <CallIcon></CallIcon>
              <p>1-800-123-4567</p>
            </div>
            <div className="icon-nav-bar">
              <LocationOnIcon className="icon-nav-bar"></LocationOnIcon>
              <p>Stores</p>
            </div>
            <div className="icon-nav-bar">
              <SupportAgentIcon className="icon-nav-bar"></SupportAgentIcon>
              <p>Virtual Appointment</p>
            </div>
          </div>
          <div className="nav-bar-header-right">
            <SearchIcon></SearchIcon>
            <a href={routes.login}>
              <AccountCircleIcon></AccountCircleIcon>
            </a>
            <FavoriteBorderIcon></FavoriteBorderIcon>
            <ShoppingCartIcon></ShoppingCartIcon>
          </div>
        </div>

        <div className="nav-bar-body">
          {/* <img src='./assets/logo/logo.png' /> */}
          <a href={routes.homePage}>
            <img src={logo} />
          </a>
          <a href={routes.homePage} style={{ textDecoration: "none" }}>
            <h3>Luxe Jewel House</h3>
          </a>
          <div
            className="nav-bar-item"
            onMouseEnter={handleMouseOverDiamond}
            onMouseLeave={handleMouseLeaveDiamond}
          >
            <button className="dropdown-toggle">
              <p>Diamond</p>
              <KeyboardArrowDownIcon style={{ color: "black" }} />
            </button>
            {isDiamondDropdownOpen && (
              <div className="dropdownWrapper">
                <DropContentDiamond />
              </div>
            )}
          </div>
          <div className="nav-bar-item"
           onMouseEnter={handleMouseOverJewelry}
           onMouseLeave={handleMouseLeaveJewelry}
           >
             <button className="dropdown-toggle">
              <p>Jewelry</p>
              <KeyboardArrowDownIcon style={{ color: "black" }} />
            </button>
            {isJewelryDropdownOpen && (
              <div className="dropdownWrapper">
                <DropContentJewelry />
              </div>
            )}
          </div>
          <div className="nav-bar-item">
            <DropContentER></DropContentER>
          </div>
          <div className="nav-bar-item">
            <p>Wedding Rings</p>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className="nav-bar-item">
            <p>Education</p>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
        </div>
      </div>
    </div>
  );
}