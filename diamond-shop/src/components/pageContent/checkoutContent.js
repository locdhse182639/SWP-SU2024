import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { routes } from '../../routes';
import { useAuth } from '../authcontext';
import { jwtDecode } from 'jwt-decode';

const OrderComponent = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [productData, setProductData] = useState([]);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });
    const { user } = useAuth();

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch('https://localhost:7251/api/OrderDetails');
            if (!response.ok) {
                throw new Error('Failed to fetch order details');
            }
            const data = await response.json();
            setOrderDetails(data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    const fetchProductData = async () => {
        try {
            const response = await fetch('https://localhost:7251/api/Products');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const fetchCustomerInfo = async (userId) => {
        try {
            const response = await fetch(`https://localhost:7251/api/Customers/User/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch customer info');
            }
            const data = await response.json();
            setCustomerInfo({
                name: data.name,
                phone: data.phoneNumber,
                email: data.email,
                address: data.address
            });
        } catch (error) {
            console.error('Error fetching customer info:', error);
        }
    };

    useEffect(() => {
        console.log('Current user:', user);

        if (user && user.token) {
            const decodedToken = jwtDecode(user.token);
            console.log('Decoded token:', decodedToken);
            const userId = decodedToken.unique_name; // Adjusted to use unique_name
            fetchOrderDetails();
            fetchProductData();
            fetchCustomerInfo(userId);
        } else {
            console.error('User or token is missing', user);
        }
    }, [user]);

    const findProductImage = (productId) => {
        const product = productData.find((p) => p.productId === productId);
        return product ? product.image1 : '/path/to/default.jpg';
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '20px', textAlign: 'center' }}>Secure Checkout</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Order Details</Typography>
                        {orderDetails && orderDetails.map((detail) => (
                            <Grid container spacing={2} key={detail.orderDetailId} style={{ marginBottom: '10px' }}>
                                <Grid item xs={3}>
                                    <img src={findProductImage(detail.productId)} alt={detail.productName} style={{ width: '100%' }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="subtitle1">{detail.productName}</Typography>
                                    <Typography variant="subtitle2">Price: ${detail.productPrice}</Typography>
                                    <Typography variant="subtitle2">Quantity: {detail.quantity}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        <Typography variant="subtitle2" style={{ marginTop: '10px' }}>
                            Subtotal: ${orderDetails ? orderDetails.reduce((acc, detail) => acc + detail.productPrice * detail.quantity, 0) : 0}
                        </Typography>
                        <Typography variant="subtitle2">Shipping: Free</Typography>
                        <Typography variant="subtitle1">Total: ${orderDetails ? orderDetails.reduce((acc, detail) => acc + detail.productPrice * detail.quantity, 0) : 0}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Customer Information</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    value={customerInfo.name}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    value={customerInfo.phone}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    value={customerInfo.email}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    name="address"
                                    value={customerInfo.address}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Button
                        href={routes.checkoutcomplete}
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'black' } }}
                    >
                        Place Order
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderComponent;
