import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography, Paper, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Checkbox } from '@mui/material';
import { orderDetails, payments } from '../services/data/data'; // Ensure this path is correct
import { routes } from '../../routes';

const OrderComponent = () => {
    const [order, setOrder] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        deliveryMethod: 'home',
        city: '',
        district: '',
        storeAddress: '',
        shippingMethod: 'fast',
        agree: false,
        subscribe: false,
    });

    useEffect(() => {
        console.log('Order Details:', orderDetails);
        console.log('Payments:', payments);
    }, []);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '20px', textAlign: 'center' }}>Secure Checkout</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Thông Tin Giỏ Hàng</Typography>
                        {orderDetails && orderDetails.map((detail) => (
                            <Grid container spacing={2} key={detail.OrderDetailID} style={{ marginBottom: '10px' }}>
                                <Grid item xs={3}>
                                    <img src={`/path/to/${detail.ProductID}.jpg`} alt={detail.ProductName} style={{ width: '100%' }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="subtitle1">{detail.ProductName}</Typography>
                                    <Typography variant="subtitle2">Giá: {detail.ProductPrice.toLocaleString()}đ</Typography>
                                    <Typography variant="subtitle2">Số lượng: {detail.Quantity}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        <Typography variant="subtitle2" style={{ marginTop: '10px' }}>
                            Tạm tính: {orderDetails ? orderDetails.reduce((acc, detail) => acc + detail.ProductPrice * detail.Quantity, 0).toLocaleString() : 0}đ
                        </Typography>
                        <Typography variant="subtitle2">Chi phí vận chuyển: Miễn phí</Typography>
                        <Typography variant="subtitle1">Thành tiền: {orderDetails ? orderDetails.reduce((acc, detail) => acc + detail.ProductPrice * detail.Quantity, 0).toLocaleString() : 0}đ</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Thông tin người mua</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Họ và tên" variant="outlined" fullWidth name="name" value={order.name} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Số điện thoại" variant="outlined" fullWidth name="phone" value={order.phone} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email" variant="outlined" fullWidth name="email" value={order.email} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Địa chỉ" variant="outlined" fullWidth name="address" value={order.address} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Thông tin thanh toán</Typography>
                        {payments && payments.map((payment) => (
                            <Grid container spacing={2} key={payment.PaymentID} style={{ marginBottom: '10px' }}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2">Mã đơn hàng: {payment.OrderID}</Typography>
                                    <Typography variant="subtitle2">Đặt cọc: {payment.Deposit.toLocaleString()}đ</Typography>
                                    <Typography variant="subtitle2">Tổng tiền: {payment.Total.toLocaleString()}đ</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Paper>
                    <Button
                        href={routes.checkoutcomplete}
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'black' } }}
                    >
                        Đặt Hàng
                    </Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default OrderComponent;
