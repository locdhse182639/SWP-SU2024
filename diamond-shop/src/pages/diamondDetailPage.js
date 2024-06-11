import React, { useState } from 'react';
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
import { routes } from '../routes';

const DiamondDetailPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleToggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div>
      <NavBar />
      <Container className="custom-container">
        <div className="back-to-gallery">
          <a href={routes.engagementRings}>&lt; Back To Gallery</a>
        </div>
        <Grid container spacing={4} className="diamond-detail-section">
          <Grid item xs={12} md={6}>
            <div className="image-wrapper">
              <img src="../assets/images/Pear_Cut_Diamonds.png" alt="Diamond" className="diamond-image" />
              <div className="rotate-instructions">CLICK & DRAG TO ROTATE</div>
            </div>
            <div className="image-gallery">
              <img src="../assets/images/Pear_Cut_Diamonds.png" alt="Diamond Thumbnail" />
              <img src="../assets/images/Pear_Cut_Diamonds.png" alt="Diamond Thumbnail" />
              <img src="../assets/images/Pear_Cut_Diamonds.png" alt="Diamond Thumbnail" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography style={{ color: 'black' }} variant="h4" className="diamond-title">1.02 Carat Pear Diamond</Typography>
            <Typography variant="body1" className="shipping-info">
              Ships as a loose diamond by: <strong>Thursday, June 13</strong>
            </Typography>
            <a href="#" className="shipping-link">Free Overnight Shipping, Hassle-Free Returns</a>
            <div className="diamond-specs">
              <span className="spec-tag">1.02ct</span>
              <span className="spec-tag">H Color</span>
              <span className="spec-tag">VS1 Clarity</span>
            </div>
            <Typography style={{ color: 'black' }} variant="h5" className="price">$3,560 <span className="diamond-price">Diamond Price</span></Typography>
            <Box className="payment-container">
              <Typography variant="body2" className="payment-options">
                Flexible Payment Options:<br />
                <span className="payment-detail">3 Interest-Free Payments of $1,186.67</span>
              </Typography>
            </Box>
            <div className="button-group">
              <Button style={{ backgroundColor: 'black' }} variant="contained" className="select-button">SELECT THIS DIAMOND</Button>
              <Button style={{ color: 'black' }} variant="outlined" className="consult-button">CONSULT AN EXPERT</Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="additional-info-section">
          <Grid item xs={12} md={6}>
            <div className="report-links">
              <a style={{ color: 'black' }} href="#">
                <ReportIcon /><br />
                GIA Report
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
            <Table className="diamond-specs-table">
              <TableBody>
                <TableRow>
                  <TableCell>Shape</TableCell>
                  <TableCell className="spec-value">Pear <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Color</TableCell>
                  <TableCell className="spec-value">H <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Clarity</TableCell>
                  <TableCell className="spec-value">VS1 <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carat Weight</TableCell>
                  <TableCell className="spec-value">1.02 <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fluorescence</TableCell>
                  <TableCell className="spec-value">Faint <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Length/Width Ratio</TableCell>
                  <TableCell className="spec-value">1.57 <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Depth %</TableCell>
                  <TableCell className="spec-value">62.1 <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Table %</TableCell>
                  <TableCell className="spec-value">60.0 <InfoOutlinedIcon className="info-icon" /></TableCell>
                </TableRow>
                {expandedSection === 'additional' && (
                  <>
                    <TableRow>
                      <TableCell>Symmetry</TableCell>
                      <TableCell className="spec-value">Very Good <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Girdle</TableCell>
                      <TableCell className="spec-value">Medium to Thick <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Culet</TableCell>
                      <TableCell className="spec-value">None <InfoOutlinedIcon className="info-icon" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Measurements</TableCell>
                      <TableCell className="spec-value">8.87x5.66x3.51 mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Certificate</TableCell>
                      <TableCell className="spec-value">GIA</TableCell>
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
                  <Typography>This 1.02 pear H diamond is sold exclusively on Luxe Jewel House.</Typography>
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