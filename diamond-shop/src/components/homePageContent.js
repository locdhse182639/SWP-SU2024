import React from 'react';
import '../css/homePageContent.css';
import BasicButtons from './button';
import UnderlineLink from './link';
import { DiamondOutlined } from '@mui/icons-material';
import DiamondIcon from '@mui/icons-material/Diamond';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Container, TextField } from '@mui/material';
import BasicTextFields from './textField';
import SelectTextFields from './selectField';
import Footer from './footer';

const HomePageContent = () => {
    const backgroundBannerStyle = {
        backgroundImage: `url(../assets/images/banner.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '80vh'
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
            <Container style={{maxWidth:'1800px'}} className="custom-container">
                <div style={backgroundBannerStyle} className='banner-content'>
                    <p style={{ color: 'black' }}>
                        "Our Craftsmanship SHINES<br />
                        &thinsp;And So Will You"
                    </p>
                    <div style={{ paddingLeft: '100px' }}>
                        <BasicButtons width='220px' height='60px' text='Shop Engagement'></BasicButtons><br />
                        <BasicButtons width='220px' height='60px' text='Shop Jewelry'></BasicButtons>
                    </div>
                </div>
                <div className='explore-diamond-banner'>
                    <h3>Explore Diamonds</h3>
                    <div className='list-img'>
                        <div className='diamond-item'>
                            <img src='../assets/images/Round_Cut_Diamonds.png' />
                            <p>Round</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Princess_Cut_Diamonds.png' />
                            <p>Princess</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Emerald_Cut_Diamonds.png' />
                            <p>Emerald</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Cushion_Shaped_Diamonds.png' />
                            <p>Cushion</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Marquise_Cut_Diamonds.png' />
                            <p>Marquise</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Radiant_Cut_Diamonds.png' />
                            <p>Radiant</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Oval_Cut_Diamonds.png' />
                            <p>Oval</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Pear_Shaped_Diamonds.png' />
                            <p>Pear</p>
                        </div>
                        <div className='diamond-item'>
                            <img src='../assets/images/Heart_Shaped_Diamonds.png' />
                            <p>Heart</p>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center' }} className='banner-content1'>
                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%', height: 'auto' }} src='../assets/images/banner1.png' />
                    <div className='banner-content1-txt'>
                        <p style={{ fontSize: '35px' }}>Do you want your own ring?</p>
                        <p style={{ fontSize: '25px' }}>Explore our free personal design service</p>
                        <a style={{ color: 'black', fontSize: '20px' }} href='#info-page'> Discover now</a>
                    </div>
                </div>

                <div style={backgroundBannerStyle2} className='banner-content2'>
                    <h4 style={{ color: 'black' }}>
                        ENGAGEMENT RINGS
                    </h4>
                    <p>"A sparkling ring on your finger opens<br />
                        &thinsp;our love story now until forever"</p>
                    <div style={{ paddingLeft: '100px' }}>
                        <BasicButtons width='220px' height='60px' text='See More'></BasicButtons>
                    </div>
                </div>

                <div style={backgroundBannerStyle3} className='banner-content3'>
                    <h4 style={{ color: 'black' }}>
                        WEDDING RINGS
                    </h4>
                    <p>"The symbol of love and promise when<br />
                        &thinsp;our hearts open up and let each other in."</p>
                    <div style={{ paddingLeft: '1200px' }}>
                        <BasicButtons width='220px' height='60px' text='See More'></BasicButtons>
                    </div>
                </div>

                <div className='policy--dec'>
                    <div className='col-12'>
                        <div className='heading-title-line'>
                            <p style={{ fontSize: '35px' }}> Why you should choose us? </p>
                        </div>
                        <div className='list d-flex flex-wrap'>
                            <div className='item'>
                                <DiamondIcon></DiamondIcon>
                                <h4>Standard quality</h4>
                                <p>Committed to crafting the correct gold content and weight.
                                    Natural diamonds and gemstones are 100% officially imported,
                                    GIA diamonds are internationally inspected and have global value.</p>
                            </div>
                            <div className='item'>
                                <HandshakeIcon></HandshakeIcon>
                                <h4>Dedicated service</h4>
                                <p>A team of customer care experts with many years of experience
                                    is always ready to support and advise on jewelry that best
                                    suits customers' needs and budget.</p>
                            </div>
                            <div className='item'>
                                <AdminPanelSettingsIcon></AdminPanelSettingsIcon>
                                <h4>Lifetime warranty</h4>
                                <p>Free product renewal spa and free lifetime warranty for metal
                                    plates under 3mm. Policy on purchasing and exchanging
                                    jewelry and diamonds is most beneficial to you.</p>
                            </div>
                            <div className='item'>
                                <CardGiftcardIcon></CardGiftcardIcon>
                                <h4>Attractive offers</h4>
                                <p>Monthly special promotion programs help Lucas Diamond customers
                                    have more opportunities to shop and experience wonderful
                                    natural diamond jewelry products.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-img'>
                    <div className='list-jewelry-img'>
                        <div className='list-jewelry-img-child'>
                            <img src='../assets/images/nhan-kim-cuong.png' />
                            <div className='btn'>
                                <BasicButtons className='btn' width='180px' height='30px' text='See more'></BasicButtons>
                            </div>
                        </div>
                        <div className='list-jewelry-img-child'>
                            <img src='../assets/images/day-chuyen-kim-cuong.png' />
                            <div className='btn'>
                                <BasicButtons width='180px' height='30px' text='See more'></BasicButtons>
                            </div>
                        </div>
                        <div className='list-jewelry-img-child'>
                            <img src='../assets/images/vong-tay-kim-cuong.png' />
                            <div className='btn'>
                                <BasicButtons width='180px' height='30px' text='See more'></BasicButtons>
                            </div>
                        </div>
                        <div className='list-jewelry-img-child'>
                            <img src='../assets/images/hoa-tai-kim-cuong.png' />
                            <div className='btn'>
                                <BasicButtons width='180px' height='30px' text='See more'></BasicButtons>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '1230px' }}></hr>

                <div className='advise-form'>
                    <h4>Get advice from us</h4>
                    <p className='advise-form-text'>Register now below to receive support from us.</p>
                    <div className='advise-form-row1'>
                        <BasicTextFields width='450px' height='50px' label='Full Name'></BasicTextFields>
                    </div>
                    <div className='advise-form-row2'>
                        <BasicTextFields width='209px' height='50px' label='Phone Number'></BasicTextFields>
                        <SelectTextFields width='210px' height='50px' label='Country' defaultValue='Country' helperText='Please select your country.'></SelectTextFields>
                    </div>
                    <div className='advise-form-btn'>
                        <BasicButtons width='180px' height='50px' text='Advise now'></BasicButtons>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default HomePageContent;
