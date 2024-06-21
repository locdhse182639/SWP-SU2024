import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../footer';
import ProductCard from '../productCard';
// import '../../css/necklaces.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../customeArrow';
import CustomToolbar from '../customToolBar';
import CarouselComponent from '../carouselComponent ';

const NecklacesContent = () => {
  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://localhost:7251/api/Products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProductData(data); // Directly set the response if it is an array
    } catch (error) {
      console.log('Error fetching products', error);
      setProductData([]);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const backgroundBanner = {
    backgroundImage: `url(../assets/images/necklace-banner.png)`, // Update the banner image for necklaces
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

  const necklaceType = productData.filter(product => product.productType === 3); // Filter for necklaces

  return (
    <div className='container'>
      <Container style={{ maxWidth: '1800px' }} className="custom-container">
        <div style={backgroundBanner} className='banner-content'>
          <p style={{ color: 'black', position: 'absolute', bottom: '60%', right: '10%' }}>
            "NECKLACES"
          </p>
        </div>
        <div style={{ backgroundColor: 'white' }} className='explore-diamond-banner'>
          <div style={{ backgroundColor: '#fafafa' }}>
            <h3>Explore Necklaces</h3>
            <p style={{ display: 'flex', justifyContent: 'center', fontFamily: 'initial', fontSize: '110%' }}>
              From elegant pendants to luxurious chains,
              we have the perfect necklace for any occasion.
              Explore some of our most popular styles below.
            </p>

            <div className='scroll-bar'>
              <Carousel
                responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                itemClass="carousel-item-padding-40-px"
              >
                {necklaceType.map(necklace => (
                  <div key={necklace.productId} className='necklace-items'>
                    <img src={necklace.image1} alt={necklace.productName} />
                    <p>{necklace.productName}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <CustomToolbar />
          <div style={{ padding: '40px' }} className='product-card'>
            <ProductCard products={necklaceType} />
          </div>
          <CarouselComponent />
        </div>
        <hr style={{ width: '100%' }}></hr>
      </Container>
      <Footer />
    </div>
  );
}

export default NecklacesContent;
