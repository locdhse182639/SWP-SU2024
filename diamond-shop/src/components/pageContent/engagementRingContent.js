import React from 'react';
import BasicButtons from '../button';
import DiamondIcon from '@mui/icons-material/Diamond';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Container, Grid, TextField } from '@mui/material';
import BasicTextFields from '../textField';
import SelectTextFields from '../selectField';
import Footer from '../footer';
import { routes } from '../../routes';
import '../../css/engagementRings.css'
import ProductCard from '../productCard';

const EngagementRingsContent = () => {
    const backgroundBanner = {
        backgroundImage: `url(../assets/images/engagement-ring-banner.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '70vh'
    };

    const backgroundBannerStyle2 = {
        backgroundImage: `url(../assets/images/engagement-ring.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '850px'
    };

    const backgroundBannerStyle3 = {
        backgroundImage: `url(../assets/images/wedding-ring.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '650px'
    };

    return (
        <div>
            <Container style={{ maxWidth: '1800px' }} className="custom-container">
                <div style={backgroundBanner} className='banner-content'>
                    <p style={{ color: 'black', paddingLeft: '1200px' }}>
                        "ENGAGEMENT RINGS"
                    </p>
                    {/* <div style={{ paddingLeft: '100px' }}>
                        <a href='' style={{ textDecoration: 'none' }}>
                            <BasicButtons width='220px' height='60px' text='Shop Engagement'></BasicButtons>
                        </a><br />
                        <BasicButtons width='220px' height='60px' text='Shop Jewelry'></BasicButtons>
                    </div> */}
                </div>
                <div className='explore-diamond-banner'>
                    <h3>Explore Engagement Rings</h3>
                    <p style={{ display: 'flex', justifyContent: 'center', fontFamily: 'initial', fontSize: '110%' }}>
                        From completed designs to custom engagement rings,
                        we have the perfect ring to help you pop the question.
                        Explore some of our most popular styles below.
                    </p>

                    <div className='scroll-bar'>
                        <div className='list-ER'>
                            <div className='ER-items'>
                                <img src='../assets/images/Solitaire_ER.png' />
                                <p>Solitaire</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/halo_ER.png' />
                                <p>Halo</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/cathedral_ER.png' />
                                <p>Cathedral</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/trellis_ER.png' />
                                <p>Trellis</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/bridgeAccent_ER.png' />
                                <p>Bridge Accent</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/twist_ER.png' />
                                <p>Twist</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/royal_ER.png' />
                                <p>Royal</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/ThreeStone_ER.png' />
                                <p>Three Stone</p>
                            </div>
                            <div className='ER-items'>
                                <img src='../assets/images/FiveStone_ER.png' />
                                <p>Five Stone</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }}></hr>
                    <div className=''>
                        <ProductCard/>
                    </div>
                </div>
                <hr style={{ width: '100%' }}></hr>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default EngagementRingsContent;
