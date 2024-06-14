import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import Button from '@mui/material/Button';
import ReportIcon from '@mui/icons-material/Report';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Footer from '../components/footer';
import '../css/diamondDetailPage.css';
import NavBar from '../components/navBar';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authcontext';
import {jwtDecode} from 'jwt-decode';

const DiamondDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [expandedSection, setExpandedSection] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7251/api/Products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleToggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleSelectProduct = async () => {
    if (!user) {
      navigate('/login');
    } else {
      try {
        const userId = jwtDecode(user.token).unique_name;

        // Fetch the user's cart
        let cartResponse = await fetch(`https://localhost:7251/api/Cart/User/${userId}`);
        let cart;
        if (cartResponse.ok) {
          cart = await cartResponse.json();
        } else if (cartResponse.status === 404) {
          // Create a new cart if not found
          cartResponse = await fetch('https://localhost:7251/api/Cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userId), // Pass userId as plain text
          });

          if (!cartResponse.ok) {
            throw new Error('Failed to create a cart');
          }

          cart = await cartResponse.json();
        } else {
          throw new Error('Failed to fetch or create a cart');
        }

        // Add the product to the cart
        const response = await fetch('https://localhost:7251/api/CartItem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartID: cart.cartID, // Use the existing or newly created cart ID
            productID: product.productId,
            quantity: 1,
            price: product.price,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }

        alert('Product added to cart');
      } catch (error) {
        console.error('Error selecting product:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  const isDiamond = product.productType === 1;
  const depositPercentage = 20; // 20% deposit
  const depositAmount = product ? (product.price * depositPercentage) / 100 : 0;
  
  return (
    <div>
      <NavBar />
      <Container className="custom-container">
        <div className="back-to-gallery">
          <a href="/engagementRings">&lt; Back To Gallery</a>
        </div>
        <Grid container spacing={4} className="diamond-detail-section">
          <Grid item xs={12} md={6}>
            <div className="image-wrapper">
              <img src={product.image1} alt="Product" className="diamond-image" />
              <div className="rotate-instructions">CLICK & DRAG TO ROTATE</div>
            </div>
            <div className="image-gallery">
              <img src={product.image1} alt="Product Thumbnail" />
              <img src={product.image2} alt="Product Thumbnail" />
              <img src={product.image3} alt="Product Thumbnail" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography style={{ color: 'black' }} variant="h4" className="product-title">{product.productName}</Typography>
            <Typography variant="body1" className="shipping-info">
              Ships as a loose {isDiamond ? 'diamond' : 'product'} by: <strong>Thursday, June 13</strong>
            </Typography>
            <a href="#" className="shipping-link">Free Overnight Shipping, Hassle-Free Returns</a>
            {isDiamond ? (
              <div className="diamond-specs">
                <span className="spec-tag">{product.caratWeight}ct</span>
                <span className="spec-tag">{product.color}</span>
                <span className="spec-tag">{product.clarity}</span>
              </div>
            ) : (
              <div className="product-specs">
                <span className="spec-tag">{product.type}</span>
                <span className="spec-tag">{product.size}</span>
              </div>
            )}
            <Typography style={{ color: 'black' }} variant="h5" className="price">${product.price} <span className="product-price">Price</span></Typography>
            <Box className="payment-container">
              <Typography variant="body2" className="payment-options">
                Flexible Payment Options:<br />
                <span className="payment-detail">3 Interest-Free Payments of ${(product.price / 3).toFixed(2)}</span>
              </Typography>
            </Box>
            <Typography variant="h6" className="deposit">
              Deposit: ${depositAmount.toFixed(2)} (20%)
            </Typography>
            <div className="button-group">
              <Button style={{ backgroundColor: 'black' }} variant="contained" className="select-button" onClick={handleSelectProduct}>
                SELECT THIS {isDiamond ? 'DIAMOND' : 'PRODUCT'}
              </Button>
              <Button style={{ color: 'black' }} variant="outlined" className="consult-button">CONSULT AN EXPERT</Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="additional-info-section">
          <Grid item xs={12} md={6}>
            <div className="report-links">
              <a style={{ color: 'black' }} href="#">
                <ReportIcon /><br />
                {isDiamond ? 'GIA Report' : 'Product Report'}
              </a>
              <a style={{ color: 'black' }} href="#">
                <ViewInArIcon /><br />
                View Size
              </a>
              <a style={{ color: 'black' }} href="#">
                <ZoomInIcon /><br />
                Super Zoom
              </a>
            </div>
            <Table className="product-specs-table">
              <TableBody>
                {isDiamond ? (
                  <>
                    <TableRow>
                      <TableCell>Shape</TableCell>
                      <TableCell className="spec-value">{product.shape} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Color</TableCell>
                      <TableCell className="spec-value">{product.color} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Clarity</TableCell>
                      <TableCell className="spec-value">{product.clarity} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Carat Weight</TableCell>
                      <TableCell className="spec-value">{product.caratWeight} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fluorescence</TableCell>
                      <TableCell className="spec-value">{product.fluorescence} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Length/Width Ratio</TableCell>
                      <TableCell className="spec-value">{product.lengthWidthRatio} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Depth %</TableCell>
                      <TableCell className="spec-value">{product.depth} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Table %</TableCell>
                      <TableCell className="spec-value">{product.tables} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    {expandedSection === 'additional' && (
                      <>
                        <TableRow>
                          <TableCell>Symmetry</TableCell>
                          <TableCell className="spec-value">{product.symmetry} <InfoOutlinedIcon className="info-icon" /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Girdle</TableCell>
                          <TableCell className="spec-value">{product.girdle} <InfoOutlinedIcon className="info-icon" /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Culet</TableCell>
                          <TableCell className="spec-value">{product.culet} <InfoOutlinedIcon className="info-icon" /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Measurements</TableCell>
                          <TableCell className="spec-value">{product.measurements}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Certificate</TableCell>
                          <TableCell className="spec-value">{product.certificate}</TableCell>
                        </TableRow>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell className="spec-value">{product.type} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Size</TableCell>
                      <TableCell className="spec-value">{product.size} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell className="spec-value">{product.description} <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                  </>
                )}
                <TableRow className="show-more" onClick={() => handleToggleSection('additional')}>
                  <TableCell colSpan={2}>
                    {expandedSection === 'additional' ? (
                      <>
                        <ExpandLessIcon />
                        <span className="show-more-text">Show Less</span>
                      </>
                    ) : (
                      <>
                        <ExpandMoreIcon />
                        <span className="show-more-text">Show More</span>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="order-includes-title">
              Your Order Includes:
            </Typography>
            <div className="order-includes">
              <div className="order-includes-item">
                <div className="icon">
                  🚚
                </div>
                <div>
                  <Typography variant="h6">Free Shipping</Typography>
                  <Typography>We're committed to making your entire experience a pleasant one, from shopping to shipping.</Typography>
                </div>
              </div>
              <div className="order-includes-item">
                <div className="icon">
                  🔄
                </div>
                <div>
                  <Typography variant="h6">Free Returns</Typography>
                  <Typography>Our commitment to you does not end at delivery. We offer free returns (U.S and Canada) to make your experience as easy as possible.</Typography>
                </div>
              </div>
            </div>
            <div className="additional-links">
              <div className="additional-link" onClick={() => handleToggleSection('productDetails')}>
                <Typography>Product Details</Typography>
                {expandedSection === 'productDetails' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {expandedSection === 'productDetails' && (
                <div className="additional-content">
                  <Typography>This {product.caratWeight}ct {product.shape} {product.color} diamond is sold exclusively on Luxe Jewel House.</Typography>
                </div>
              )}
              <div className="additional-link" onClick={() => handleToggleSection('gradingReport')}>
                <Typography>GIA Grading Report</Typography>
                {expandedSection === 'gradingReport' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {expandedSection === 'gradingReport' && (
                <div className="additional-content">
                  <Typography>The GIA grading report provides a detailed analysis of your diamond's quality and characteristics.</Typography>
                </div>
              )}
              <div className="additional-link" onClick={() => handleToggleSection('upgradeProgram')}>
                <Typography>Lifetime Diamond Upgrade Program</Typography>
                {expandedSection === 'upgradeProgram' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {expandedSection === 'upgradeProgram' && (
                <div className="additional-content">
                  <Typography>Upgrade your diamond at any time for a diamond of greater value. The full value of your original diamond will be applied to your new purchase.</Typography>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default DiamondDetailPage;
