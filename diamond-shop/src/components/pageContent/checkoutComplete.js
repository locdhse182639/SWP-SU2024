import React from 'react';
import { Container, Paper, Typography, Grid, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import test from '../../constant/ThreeStone_ER.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MyComponent = () => {
    return (
        <CheckCircleIcon style={{ color: 'green' }} />
    );
};


const OrderConfirmation = () => {
    return (
        <Container maxWidth="1440px" style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <Link to={routes.homePage}>
                    <h4 style={{ fontSize: '1.2rem' }}>Home Page </h4>
                </Link>
                <h4 style={{ fontSize: '1.2rem' }}>/ Your order has been received</h4>
            </div>

            <div style={{ width: '100%' }}>
                <Box style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography
                        variant="h5"
                        color="success.main"
                        style={{
                            backgroundColor: '#E8F5E9',
                            padding: '10px',
                            fontSize: '1.7rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CheckCircleIcon style={{ marginRight: '8px' }} />
                        ORDER SUCCESS
                    </Typography>
                </Box>
                <Box>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <div style={{ paddingRight: '5%' }}>
                            <Paper elevation={4} style={{ padding: '20px' }}>
                                <Grid container spacing={12}>
                                    <Grid item xs={12} md={12}>
                                        <Typography variant="h6">INFORMATION LINE #madonhang</Typography>
                                        <Box style={{ display: 'flex', marginBottom: '2%', marginTop: '2%' }}>
                                            <img src={test} alt="Product" style={{ width: '100px', height: 'fit-content', marginRight: '10px' }} />
                                            <Box>
                                                <Typography variant="subtitle1" style={{ fontSize: '1.5rem' }}>Nhẫn cưới Kim cương Vàng Trắng 14K PNJ</Typography>
                                                <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Code: masanpham</Typography>
                                                <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Unit price: 37.384.000đ</Typography>
                                                <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Size: 12</Typography>
                                                <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Quantity: 1</Typography>
                                            </Box>
                                        </Box>
                                        <Divider />
                                        <Box style={{ marginTop: '10px' }}>
                                            <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Unit price: 37.384.000đ</Typography>
                                            <Typography variant="h6" color="error" style={{ fontSize: '1.5rem' }}>Total payment: 37.384.000đ</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="h6" style={{ fontSize: '1.5rem' }}>RECEIVER'S INFORMATION</Typography>
                                    <Box style={{ marginBottom: '10px' }}>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Receiver:</strong> chị Pham Cao Nguyen</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Phone number:</strong> 0934548592</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Delivery address:</strong> 1016A khu dan cu thoi an, PHƯỜNG THỚI AN, QUẬN 12, HỒ CHÍ MINH</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Estimated delivery time:</strong> Thứ ba, 11/06/2024 - Thứ sáu, 14/06/2024</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Pay:</strong> Thanh toán tiền mặt khi nhận hàng (COD)</Typography>
                                    </Box>
                                    <Divider />
                                    <Box style={{ marginTop: '10px' }}>
                                        <Typography variant="h6" style={{ fontSize: '1.5rem' }}>PAYMENTS</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Cash payment upon delivery (COD)</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Box>

            </div>

        </Container>
    );
};

export default OrderConfirmation;
