
import React from 'react';
import '../../css/Testhome.css';
import BasicButtons from '../button';
import UnderlineLink from '../link';
import { DiamondOutlined } from '@mui/icons-material';
import DiamondIcon from '@mui/icons-material/Diamond';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Container, Grid } from '@mui/material';
import BasicTextFields from '../textField';
import SelectTextFields from '../selectField';
import Footer from '../footer';
import { routes } from '../../routes';

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
        <div className='container'>
            <Container style={{ maxWidth: '1800px' }} className="custom-container">
                <div style={backgroundBannerStyle} className='banner-content'>
                    <p style={{ color: 'black' }}>
                        "Our Craftsmanship SHINES<br />
                        &thinsp;And So Will You"
                    </p>
                    <div style={{ paddingLeft: '100px' }}>
                        <a href='' style={{ textDecoration: 'none' }}>
                            <BasicButtons width='220px' height='60px' text='Shop Engagement'></BasicButtons>
                        </a><br />
                        <BasicButtons width='220px' height='60px' text='Shop Jewelry'></BasicButtons>
                    </div>
                </div>
                <div className='explore-diamond-banner'>
                    <h3>Explore Diamonds</h3>
                    <Grid container spacing={2} className='list-img'>
                        {['Round', 'Princess', 'Emerald', 'Cushion', 'Marquise', 'Radiant', 'Oval', 'Pear', 'Heart'].map((shape, index) => (
                            <Grid key={index} className='diamond-item'>
                                <img src={`../assets/images/${shape.replace(' ', '_')}_Cut_Diamonds.png`} alt={`${shape} cut diamond`} />
                                <p>{shape}</p>
                            </Grid>
                        ))}
                    </Grid>
                </div>

                <div className='banner-content1'>
                    <img src='../assets/images/banner1.png' alt='Banner 1' />
                    <div className='banner-content1-txt'>
                        <p style={{ fontSize: '35px' }}>Do you want your own ring?</p>
                        <p style={{ fontSize: '25px' }}>Explore our free personal design service</p>
                        <a style={{ color: 'black', fontSize: '20px' }} href='#info-page'> Discover now</a>
                    </div>
                </div>

                <div style={backgroundBannerStyle2} className='banner-content2'>
                    <div>
                        <h4 style={{ color: 'black' }}>
                            ENGAGEMENT RINGS
                        </h4><br />
                        <p>"A sparkling ring on your finger opens<br />
                            &thinsp;our love story now until forever"</p>

                        <div className='btn-banner'>
                            <a href={routes.engagementRings} style={{ textDecoration: 'none' }}>
                                <BasicButtons  width='220px' height='60px' text='See More'></BasicButtons>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={backgroundBannerStyle3} className='banner-content3'>
                    <div>
                        <h4 style={{ color: 'black' }}>
                            WEDDING RINGS
                        </h4>
                        <p>"The symbol of love and promise when<br />
                            &thinsp;our hearts open up and let each other in."</p>
                        <div className='btn-banner'>
                            <a href={routes.weddingRings} style={{ textDecoration: 'none' }}>
                                <BasicButtons  width='220px' height='60px' text='See More'></BasicButtons>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='policy--dec'>
                    <div className='col-12'>
                        <div className='heading-title-line'>
                            <p style={{ fontSize: '35px' }}> Why you should choose us? </p>
                        </div>
                        <Grid container spacing={2} className='list d-flex flex-wrap'>
                            <Grid item xs={12} sm={6} md={3} className='item'>
                                <DiamondIcon />
                                <h4>Standard quality</h4>
                                <p>Committed to crafting the correct gold content and weight.
                                    Natural diamonds and gemstones are 100% officially imported,
                                    GIA diamonds are internationally inspected and have global value.</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} className='item'>
                                <HandshakeIcon />
                                <h4>Dedicated service</h4>
                                <p>A team of customer care experts with many years of experience
                                    is always ready to support and advise on jewelry that best
                                    suits customers' needs and budget.</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} className='item'>
                                <AdminPanelSettingsIcon />
                                <h4>Lifetime warranty</h4>
                                <p>Free product renewal spa and free lifetime warranty for metal
                                    plates under 3mm. Policy on purchasing and exchanging
                                    jewelry and diamonds is most beneficial to you.</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} className='item'>
                                <CardGiftcardIcon />
                                <h4>Attractive offers</h4>
                                <p>Monthly special promotion programs help Lucas Diamond customers
                                    have more opportunities to shop and experience wonderful
                                    natural diamond jewelry products.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Grid container className='list-img'>
                    {['nhan-kim-cuong', 'day-chuyen-kim-cuong', 'vong-tay-kim-cuong', 'hoa-tai-kim-cuong'].map((imgName, index) => (
                        <Grid key={index} className='list-jewelry-img-child'>
                            <img src={`../assets/images/${imgName}.png`} alt={imgName} />
                            <div className='btn'>
                                <BasicButtons width='180px' height='30px' text='See more'></BasicButtons>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                <hr style={{ width: '1230px' }} />

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
            <Footer />
        </div>
    );
}

export default HomePageContent;
