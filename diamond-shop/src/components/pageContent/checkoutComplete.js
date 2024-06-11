import React from 'react';
import { Container, Paper, Typography, Grid, Divider, Box } from '@mui/material';

const OrderConfirmation = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Box style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h5" color="success.main">ĐẶT HÀNG THÀNH CÔNG</Typography>
                    <Typography variant="body2">Thông tin người mua → Hình thức nhận hàng → Đặt hàng</Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h6">THÔNG TIN ĐƠN HÀNG #1354415</Typography>
                        <Box style={{ display: 'flex', marginBottom: '10px' }}>
                            <img src="/path/to/ring.jpg" alt="Product" style={{ width: '100px', marginRight: '10px' }} />
                            <Box>
                                <Typography variant="subtitle1">Nhẫn cưới Kim cương Vàng Trắng 14K PNJ</Typography>
                                <Typography variant="body2">Mã: DDDDW009976</Typography>
                                <Typography variant="body2">Đơn giá: 37.384.000đ</Typography>
                                <Typography variant="body2">Size nhẫn: 12</Typography>
                                <Typography variant="body2">Số lượng: 1</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box style={{ marginTop: '10px' }}>
                            <Typography variant="body2">Tạm tính: 37.384.000đ</Typography>
                            <Typography variant="body2">Chi phí vận chuyển: Miễn phí</Typography>
                            <Typography variant="h6" color="error">Tổng thanh toán: 37.384.000đ</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h6">THÔNG TIN NGƯỜI NHẬN</Typography>
                        <Box style={{ marginBottom: '10px' }}>
                            <Typography variant="body2"><strong>Người nhận hàng:</strong> chị Pham Cao Nguyen</Typography>
                            <Typography variant="body2"><strong>Điện thoại:</strong> 0934548592</Typography>
                            <Typography variant="body2"><strong>Địa chỉ giao hàng:</strong> 1016A khu dan cu thoi an, PHƯỜNG THỚI AN, QUẬN 12, HỒ CHÍ MINH</Typography>
                            <Typography variant="body2"><strong>Thời gian giao hàng dự kiến:</strong> Thứ ba, 11/06/2024 - Thứ sáu, 14/06/2024</Typography>
                            <Typography variant="body2"><strong>Thanh toán:</strong> Thanh toán tiền mặt khi nhận hàng (COD)</Typography>
                        </Box>
                        <Divider />
                        <Box style={{ marginTop: '10px' }}>
                            <Typography variant="h6">HÌNH THỨC THANH TOÁN</Typography>
                            <Typography variant="body2">Thanh toán tiền mặt khi nhận hàng (COD)</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default OrderConfirmation;
