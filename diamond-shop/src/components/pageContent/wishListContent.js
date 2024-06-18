import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, IconButton, Grid, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from 'react-bootstrap';
import { Margin, Padding } from '@mui/icons-material';
import pic from '../../constant/ThreeStone_ER.png'

const wishlistItems = [
    {
        id: 1,
        title: 'Classic Pear Shaped Sapphire Engagement Ring in 18k White Gold',
        sku: '501201W',
        price: 1470,
        imageUrl: 'url_to_image_1',
    },
    {
        id: 2,
        title: 'Tapered Baguette Diamond Engagement Ring in 14k White Gold',
        sku: '501420W14',
        price: 1160,
        imageUrl: 'url_to_image_2',
    },
];

const Wishlist = () => {
    const handleRemove = (id) => {
        // Implement remove item logic
    };

    const handleClearWishlist = () => {
        // Implement clear wishlist logic
    };

    return (
        <Box maxWidth="1200px" style={{ marginTop: '1%', backgroundColor: '', margin: 'auto' }}>
            <Box p={3}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">WISHLIST ({wishlistItems.length} ITEMS)</Typography>
                    <Button size="small" variant="text" sx={{ color: 'black' }} onClick={handleClearWishlist}>Clear Wishlist</Button>
                </div>
                <Grid style={{ marginTop: '1%' }} container spacing={2}>
                    {wishlistItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card style={{ width: '80%' }}>
                                {/* <IconButton
                                aria-label="remove"
                                onClick={() => handleRemove(item.id)}
                                sx={{ position: 'absolute', right: 8, top: 8 }}
                            >
                                <CloseIcon />
                            </IconButton> */}
                                <CardMedia
                                    style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
                                    component="img"
                                    height="140"
                                    image={pic}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography style={{ fontSize: '90%' }} gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        SKU {item.sku}
                                    </Typography>
                                    <Typography variant="h6">${item.price}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Stack spacing={2} direction="row">
                                        <Button size="small" variant="text" sx={{ color: 'black' }}>
                                            View Item
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'black', // Keep background color black on hover
                                                    color: 'white', // Keep text color white on hover
                                                    boxShadow: 'none', // Remove any box shadow on hover
                                                },
                                            }}
                                        >
                                            Select This Setting
                                        </Button>
                                    </Stack>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Wishlist;
