import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../css/dropContentDiamond.css'
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import giaImg from '../../constant/diamond-gia.png'

const DropContentDiamond = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {/* Dropdown Button */}
        <p>Diamond</p>
        <KeyboardArrowDownIcon style={{ color: 'black' }}></KeyboardArrowDownIcon>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className='dropdown-menu-1'>
            <div style={{ margin: '0' }} className='first-row'>
              <a>
                <h4
                  style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '40px', marginBottom: '0' }}
                >
                  Shop Diamonds By Shape</h4>
              </a>
              <div className='diamond-shape'>
                <div className='diamond-shape-left'>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Round_Cut_Diamonds.png' />
                      <p>Round</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Princess_Cut_Diamonds.png' />
                      <p>Princess</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Emerald_Cut_Diamonds.png' />
                      <p>Emerald</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Cushion_Shaped_Diamonds.png' />
                      <p>Cushion</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Marquise_Cut_Diamonds.png' />
                      <p>Marquise</p>
                    </div>
                  </Link>
                </div>

                <div className='diamond-shape-right'>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Radiant_Cut_Diamonds.png' />
                      <p>Radiant</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Emerald_Cut_Diamonds.png' />
                      <p>Emerald</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Oval_Cut_Diamonds.png' />
                      <p>Oval</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Pear_Shaped_Diamonds.png' />
                      <p>Pear</p>
                    </div>
                  </Link>
                  <Link to={routes.diamondList}>
                    <div className='diamond-item1'>
                      <img src='../assets/images/Heart_Shaped_Diamonds.png' />
                      <p>Heart</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: '30px', paddingRight:'30px', width:'350px' }} className='second-row'>
              <div className='second-row-content'>
                <a>
                  <h4
                    style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '0px', marginBottom: '0' }}
                  >
                    Build Your Own Jewelry</h4>
                </a>
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                  Rings
                </a>
                <a>
                  <h4
                    style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '0px', marginBottom: '0' }}
                  >
                    Learn About</h4>
                </a>
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                  How Shape Affects Price
                </a>
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                  Learn About the 4Cs
                </a>
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                  Ethically Sourced
                </a>
                <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '20px', marginBottom: '0', fontSize: '20px' }}>
                  Diamond Sustainability
                </a>
              </div>
            </div>
            <div className='third-row'>
              <img style={{ width: '400px', height: '400px', paddingTop: '30px', paddingLeft: '50px', paddingRight:'50px' }} src={giaImg} />
              <a style={{ paddingTop: '5px', marginTop: '0', paddingLeft: '40px', marginBottom: '0', fontSize:'20px' }}>
                  View All Diamonds
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropContentDiamond;
