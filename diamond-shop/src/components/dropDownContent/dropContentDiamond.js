import React from 'react';
import '../../css/dropContentDiamond.css'
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import giaImg from '../../constant/diamond-gia.png'

const DropContentDiamond = () => {
  return (
    <div className="dropdown" style={{ width: '100%' }}>
      <div className="dropdown-menu">
        <div className='dropdown-menu-1'>
          <div style={{ margin: '0' }} className='first-row'>
            <a>
              <h4
                style={{ fontSize: '25px', paddingTop: '5px', marginTop: '0', paddingLeft: '40px', marginBottom: '0' }}
              >
                Shop Diamonds By Shape</h4>
            </a>
            <div className='diamond-shape' style={{ width: '40%' }}>
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
          <div style={{ width: '30%' }} className='second-row'>
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
          <div className='third-row' style={{ width: '30%' }}>
            <img style={{ width: '100%', height: '400px', paddingTop: '30px' }} src={giaImg} />
            <a style={{ marginBottom: '0', fontSize: '20px' }}>
              View All Diamonds
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropContentDiamond;