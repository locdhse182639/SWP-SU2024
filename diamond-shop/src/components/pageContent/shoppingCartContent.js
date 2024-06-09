import React from 'react';
import { Box, Typography, Paper, Button, Divider, Grid, Link, TextField } from '@mui/material';
import { routes } from '../../routes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ShoppingCartContent = () => {
    return (
        <Box sx={{ padding: 4, maxWidth: '1200px', margin: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Link style={{ fontSize: '80%', color: 'black' }} href={routes.homePage} underline="hover">
                    <ArrowBackIosIcon style={{ width: '3%', height: '3%' }} />
                    CONTINUE SHOPPING
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography variant="h6">MY CART (1 ITEM)</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
                <Box>
                    <Paper sx={{ padding: 2, marginBottom: 4, marginRight: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <img
                                    src="path-to-image"
                                    alt="Engagement Ring"
                                    style={{ maxWidth: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1">
                                        Tapered Baguette Diamond Engagement Ring in 14k White Gold (1/6 ct. tw.)
                                    </Typography>
                                    <Link style={{ fontSize: '80%', color: 'black' }} href='' underline="hover">
                                        REMOVE
                                    </Link>
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                    SKU 502260W14 $1,260
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    1.01 Carat G-VS2 Heart Shaped Diamond
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    SKU 19751585 $2,820
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                    <TextField
                                        select
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                        size="small"
                                        defaultValue="3.5"
                                        sx={{ marginRight: 2 }}
                                    >
                                        {[3.5, 4, 4.5, 5, 5.5, 6].map((size) => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </TextField>
                                    {/* <Link href="#" underline="hover">Find my ring size</Link> */}
                                </Box>
                                <Typography variant="h6" sx={{ marginTop: 2 }}>
                                    $4,080
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>SHIPPING</Typography>
                            <Typography variant="body2">- Free Shipping Worldwide</Typography>
                            <Typography variant="body2">- Overnight Shipping</Typography>
                            <Typography variant="body2">- Order Tracking Every step of the way</Typography>
                            <Link href="#" underline="hover">More Info...</Link>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>RETURNS</Typography>
                            <Typography variant="body2">- 100% Money Back Guarantee</Typography>
                            <Typography variant="body2">- Free returns from the US & Canada</Typography>
                            <Typography variant="body2">- Fully Insured Returns</Typography>
                            <Link href="#" underline="hover">More Info...</Link>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Paper sx={{ padding: 2, maxWidth: 400, marginLeft: 'auto' }}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>SUMMARY</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                            <Typography variant="body1">Subtotal</Typography>
                            <Typography variant="body1">$4,080</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                            <Typography variant="body1">US & Int. Shipping</Typography>
                            <Typography variant="body1">Free</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Typography variant="body1">Taxes/Duties Estimate</Typography>
                            <Typography variant="body1">TBD</Typography>
                        </Box>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Typography variant="h6">Total</Typography>
                            <Typography variant="h6">$4,080</Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                            or interest-free installments from $1,360 / mo.
                        </Typography>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ marginBottom: 1, backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}
                        >
                            CHECKOUT
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}
                        >
                            PayPal
                        </Button>

                    </Paper>
                    <Box sx={{ textAlign: 'left', marginTop: 3 }}>
                        <Typography variant="body2">24/7 Customer Service</Typography>
                        <Typography variant="body2">1-800-242-2728</Typography>
                        <Link href="#" underline="hover">Chat With Us</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ShoppingCartContent;
