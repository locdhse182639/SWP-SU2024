import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../footer';
import ProductCard from '../productCard';
import '../../css/engagementRings.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../customeArrow';
import CustomToolbar from '../customToolBar';
import CarouselComponent from '../carouselComponent ';



const EngagementRingsContent = () => {
    const [productData, setProductData] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://localhost:7251/api/Products');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.log('Error fetching products', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);



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

    const ringType = productData.filter(product => product.productType === 2);

    return (
        <div className='container'>
            <Container style={{ maxWidth: '1800px' }} className="custom-container">
                <div style={backgroundBanner} className='banner-content'>
                    <p style={{ color: 'black', position: 'absolute', bottom: '60%', right: '10%' }}>
                        "ENGAGEMENT RINGS"
                    </p>
                </div>
                <div style={{ backgroundColor: 'white' }} className='explore-diamond-banner'>
                    <div style={{ backgroundColor: '#fafafa' }}>
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
                                {ringType.map(ring => (
                                    <div key={ring.productId} className='ER-items'>
                                        <img src={ring.image1} alt={ring.productName} />
                                        <p>{ring.productName}</p>
                                    </div>
                                ))}
                                {/* <div className='ER-items'>
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
                                </div> */}
                            </Carousel>
                        </div>
                    </div>
                    {/* <hr style={{ width: '100%' }}></hr> */}
                    <CustomToolbar />
                    <div style={{ padding: '40px' }} className='product-card'>
                        <ProductCard products={ringType} />
                    </div>

                    {/* <Box className="custom-design-section">
                        <Box className="text-container">
                            <Typography variant="h5" className="title">
                                Custom design
                            </Typography>
                            <Typography variant="body1" className="subtitle">
                                Actualize the ring with your own ideas and stories.
                            </Typography>
                            <a variant="outlined" color="black">
                                Discover now &gt;
                            </a>
                        </Box>
                        <img
                            src={thietketheoyeucau}
                            alt="Custom Design"
                            className="image"
                        />
                    </Box> */}
                    <CarouselComponent/>
                </div>
                <hr style={{ width: '100%' }}></hr>
            </Container>
            <Footer />
        </div>
    );
}

export default EngagementRingsContent;
