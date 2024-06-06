import React, { useState } from 'react';
// import '../css/dropContentJewelry.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import '../../css/dropContentDiamond.css'
import engageRing from '../../constant/engagement-rings.png'


const DropContentJewelry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          {/* Dropdown Button */}
          <p>Jewelry</p>
          <KeyboardArrowDownIcon style={{ color: 'black' }}></KeyboardArrowDownIcon>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {/* <a href="#" className="dropdown-item">Action</a>
          <a href="#" className="dropdown-item">Another action</a>
          <a href="#" className="dropdown-item">Something else here</a> */}


            <div className='dropdown-menu-1'>
              <div style={{ margin: '0' }} className='first-row'>
                <a>
                  <h4
                    style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '50px', marginBottom: '0' }}
                  >
                    Shape</h4>
                </a>
                <div className='diamond-shape'>
                  <div className='diamond-shape-left'>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Solitaire
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Halo
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Bridge Accent
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Twist
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      ThreeStone
                    </a>
                  </div>

                  <div className='diamond-shape-right'>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Cathedral
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Trellis
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Double Halo
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Royal
                    </a>
                    <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                      Five Stone
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: '30px', paddingRight: '30px', width: '350px' }} className='second-row'>
                <div className='second-row-content'>
                  <a>
                    <h4
                      style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '0px', marginBottom: '0' }}
                    >
                      Shape Of Diamonds</h4>
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Round
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Heart
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Pear
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Emerald
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Cushion
                  </a>
                  <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                    Oval
                  </a>
                </div>
              </div>
              <div className='third-row'>
                <img style={{ width: '400px', height: '400px', paddingTop: '30px', paddingLeft: '10px', paddingRight: '50px' }} src={engageRing} />
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '10px', marginBottom: '0', fontSize: '20px' }}>
                  View All Diamonds
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropContentJewelry;
