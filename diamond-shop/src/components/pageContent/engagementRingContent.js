import React from 'react';
import { Container } from '@mui/material';
import Footer from '../footer';
import ProductCard from '../productCard';
import '../../css/engagementRings.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../customeArrow'; // Import custom arrow components
import CustomToolbar from '../customToolBar';

const EngagementRingsContent = () => {
    const backgroundBanner = {
        backgroundImage: `url(../assets/images/engagement-ring-banner.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '70vh',
        position: 'relative',
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='container'>
            <Container style={{ maxWidth: '1800px' }} className="custom-container">
                <div style={backgroundBanner} className='banner-content'>
                    <p style={{ color: 'black', position: 'absolute', bottom: '60%', right: '10%' }}>
                        "ENGAGEMENT RINGS"
                    </p>
                </div>
                <div style={{ backgroundColor: 'white' }} className='explore-diamond-banner'>
                    <div style={{backgroundColor:'#fafafa'}}>
                        <h3>Explore Engagement Rings</h3>
                        <p style={{ display: 'flex', justifyContent: 'center', fontFamily: 'initial', fontSize: '110%' }}>
                            From completed designs to custom engagement rings,
                            we have the perfect ring to help you pop the question.
                            Explore some of our most popular styles below.
                        </p>

                        <div className='scroll-bar'>
                            <Carousel
                                responsive={responsive}
                                customLeftArrow={<CustomLeftArrow />}
                                customRightArrow={<CustomRightArrow />}
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className='ER-items'>
                                    <img src='../assets/images/Solitaire_ER.png' alt="Solitaire" />
                                    <p>Solitaire</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/halo_ER.png' alt="Halo" />
                                    <p>Halo</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/cathedral_ER.png' alt="Cathedral" />
                                    <p>Cathedral</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/trellis_ER.png' alt="Trellis" />
                                    <p>Trellis</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/bridgeAccent_ER.png' alt="Bridge Accent" />
                                    <p>Bridge Accent</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/twist_ER.png' alt="Twist" />
                                    <p>Twist</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/royal_ER.png' alt="Royal" />
                                    <p>Royal</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/ThreeStone_ER.png' alt="Three Stone" />
                                    <p>Three Stone</p>
                                </div>
                                <div className='ER-items'>
                                    <img src='../assets/images/FiveStone_ER.png' alt="Five Stone" />
                                    <p>Five Stone</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    {/* <hr style={{ width: '100%' }}></hr> */}
                    <CustomToolbar />
                    <div style={{ padding: '40px' }} className='product-card'>
                        <ProductCard />
                    </div>
                </div>
                <hr style={{ width: '100%' }}></hr>
            </Container>
            <Footer />
        </div>
    );
}

export default EngagementRingsContent;
