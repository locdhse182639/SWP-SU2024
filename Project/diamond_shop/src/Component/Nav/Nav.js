import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <header id="header" className="header fixed-top">
        <div className="header-top">
          <div className="container-fluid container-sm container-lg d-flex justify-content-between align-items-center">
            <div className="contact-info d-flex align-items-center">
              <a href="tel:1-800-123-4567" className="phone"><i className="bi bi-telephone"></i> 1-800-123-4567</a>
              <a href="stores.html" className="stores"><i className="bi bi-geo-alt"></i> Stores</a>
              <a href="virtual-appointment.html" className="virtual-appointment"><i className="bi bi-headphones"></i> Virtual Appointment</a>
            </div>
            <div className="header-icons d-flex align-items-center">
              <a href="#" className="search"><i className="bi bi-search icon-nav"></i></a>
              <a href="#" className="user"><i className="bi bi-person icon-nav"></i></a>
              <a href="#" className="wishlist"><i className="bi bi-heart icon-nav"></i></a>
              <a href="#" className="cart"><i className="bi bi-cart icon-nav"></i></a>
              <div className="currency">
                <a href="#" className="usd"><img src="assets/img/usd.png" alt="USD" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <i className="bi bi-gem"></i>
            <h1>MatchaLatte</h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li className="dropdown">
                <a href="#"><span>Gallery</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="gallery.html">Nature</a></li>
                  <li><a href="gallery.html">People</a></li>
                  <li><a href="gallery.html">Architecture</a></li>
                  <li><a href="gallery.html">Animals</a></li>
                  <li><a href="gallery.html">Sports</a></li>
                  <li><a href="gallery.html">Travel</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Sub Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Sub Menu 1</a></li>
                      <li><a href="#">Sub Menu 2</a></li>
                      <li><a href="#">Sub Menu 3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          {/* .navbar */}

          <div className="header-social-links d-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    );
  }
}
