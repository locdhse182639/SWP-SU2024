import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5>Customer Care</h5>
              <ul>
                <li><i className="bi bi-chat"></i> Live Chat</li>
                <li><i className="bi bi-telephone"></i> 1-800-242-2728</li>
                <li><i className="bi bi-envelope"></i> Email Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Returns</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Why MatchaLatte</h5>
              <ul>
                <li>Returns Are Free</li>
                <li>Conflict Free Diamonds</li>
                <li>Diamond Price Matching</li>
                <li>Diamond Upgrade Program</li>
                <li>Free Lifetime Warranty</li>
                <li>Free Secure Shipping</li>
                <li>Free Boxes & Gift Cards</li>
                <li>MatchaLatte Credit Card</li>
                <li>Jewelry Insurance</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>About MatchaLatte</h5>
              <ul>
                <li>Quality & Value</li>
                <li>Diamond Sustainability</li>
                <li>MatchaLatte Blog</li>
                <li>Locations</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Diamond Shapes</h5>
              <ul>
                <li>Round</li>
                <li>Princess</li>
                <li>Cushion</li>
                <li>Oval</li>
                <li>Emerald</li>
                <li>Pear</li>
                <li>Asscher</li>
                <li>Heart</li>
                <li>Radiant</li>
                <li>Marquise</li>
              </ul>
            </div>
            <div className="col-md-3 join">
              <h5>Join the MatchaLatte - List</h5>
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
              <div className="footer-social">
                <a href="#"><i className="bi bi-facebook"></i> Facebook</a>
                <a href="#"><i className="bi bi-instagram"></i> Instagram</a>
                <a href="#"><i className="bi bi-twitter"></i> Twitter</a>
                <a href="#"><i className="bi bi-pinterest"></i> Pinterest</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>&copy; 2024 MatchaLatte Inc.</p>
              <ul className="footer-links">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Cookies Settings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
