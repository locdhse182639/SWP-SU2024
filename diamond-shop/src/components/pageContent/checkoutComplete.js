import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Grid, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import test from '../../constant/ThreeStone_ER.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAuth } from '../authcontext';
import { jwtDecode } from 'jwt-decode';


const MyComponent = () => {
    return (
        <CheckCircleIcon style={{ color: 'green' }} />
    );
};


const OrderConfirmation = () => {
    const [orderDetailData, setOrderDetailData] = useState([]);
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
            setOrderDetailData(data);
            console.log(data);
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
            // Fetch data from both endpoints concurrently
            const [userResponse, customerResponse] = await Promise.all([
                fetch(`https://localhost:7251/api/Users/${userId}`),
                fetch(`https://localhost:7251/api/Customers/User/${userId}`)
            ]);

            if (!userResponse.ok) {
                throw new Error('Failed to fetch user info');
            }

            if (!customerResponse.ok) {
                throw new Error('Failed to fetch customer info');
            }

            const userData = await userResponse.json();
            const customerData = await customerResponse.json();

            // Merge user and customer data
            setCustomerInfo({
                name: customerData.name,
                phone: customerData.phoneNumber,
                email: userData.email, // Assuming email is in userData
                address: customerData.address
            });
        } catch (error) {
            console.error('Error fetching user or customer info:', error);
        }
    };



    const calculateTotal = () => {
        return orderDetailData.reduce((total, item) => total + item.productPrice, 0).toFixed(2);
    };

    const order = orderDetailData.map(orderDetail => {
        const product = productData.find(product => product.productId === orderDetail.productId);
        return {
            ...orderDetail,
            size: product ? product.size : null // Add size from productData
        };
    });

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
                                <Grid md={6} container spacing={3}>
                                        {order && order.map((detail) => (
                                            <Grid item xs={12} md={12}>
                                                <Typography variant="h6">INFORMATION LINE #{detail.orderId}</Typography>
                                                <Box style={{ display: 'flex', marginBottom: '2%', marginTop: '2%' }}>
                                                    <img src={test} alt="Product" style={{ width: '100px', height: 'fit-content', marginRight: '10px' }} />
                                                    <Box>
                                                        <Typography variant="subtitle1" style={{ fontSize: '1.5rem' }}>Product: {detail.productName}</Typography>
                                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Code: {detail.productId}</Typography>
                                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Unit price: {detail.productPrice}</Typography>
                                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Size: {detail.size}</Typography>
                                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>Quantity: {detail.quantity}</Typography>
                                                    </Box>
                                                </Box>
                                                <Divider />
                                            </Grid>
                                        ))}
                                        <Grid  item xs={12} md={12}>
                                        <Box style={{ marginTop: '10px', textAlign: 'left' }}>
                                            <Typography variant="h6" color="error" style={{ fontSize: '1.5rem' }}>Total payment: {calculateTotal()}</Typography>
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
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Receiver:</strong>{customerInfo.name}</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}><strong>Phone number:</strong>{customerInfo.phone}</Typography>
                                    </Box>
                                    <Divider />
                                    <Box style={{ marginTop: '10px' }}>
                                        <Typography variant="h6" style={{ fontSize: '1.5rem' }}>PAYMENTS</Typography>
                                        <Typography variant="body2" style={{ fontSize: '1.2rem' }}>VN PAY QR CODE</Typography>
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
