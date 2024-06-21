import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, TextField, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { useAuth } from './authcontext';
import PaginationControlled from './pagination';
import { routes } from '../routes';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const StyledCard = styled(Card)({
    border: '1px solid #ddd',
    boxShadow: 'none',
    borderRadius: '5px',
    position: 'relative',
    maxWidth: '100%',
});

const StyledCardMedia = styled(CardMedia)({
    height: 200,
    backgroundColor: '#001',
});

const StyledCardContent = styled(CardContent)({
    textAlign: 'center',
    paddingBottom: '16px !important',
});

const PriceTypography = styled(Typography)({
    fontWeight: 'bold',
    marginTop: '8px',
    color: '#ffa500',
});

const ProductName = styled(Typography)({
    marginTop: '8px',
    fontWeight: 'bold',
});

const ProductCard = ({ products }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (user) {
            const userId = jwtDecode(user.token).unique_name;
            fetchWishlist(userId);
        }
    }, [user]);

    const fetchWishlist = async (userId) => {
        try {
            const customerId = await fetchCustomerId(userId);
            const response = await fetch(`https://localhost:7251/api/Wishlists/Customer/${customerId}`);
            if (response.ok) {
                const wishlistData = await response.json();
                setWishlist(wishlistData.wishlistItems.map(item => item.productId));
            }
        } catch (error) {
            console.error('Failed to fetch wishlist:', error);
        }
    };

    const fetchCustomerId = async (userId) => {
        const response = await fetch(`https://localhost:7251/api/customers/user/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch customer details');
        }
        const customer = await response.json();
        return customer.customerId; // Adjust this based on your API response structure
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSelectProduct = async (product, selectedSize) => {
        if (!user) {
            navigate('/login');
        } else {
            try {
                const userId = jwtDecode(user.token).unique_name;
                const customerId = await fetchCustomerId(userId);

                // Check if the product is already in the wishlist
                if (wishlist.includes(product.productId)) {
                    console.log('Product already in wishlist');
                    return;
                }

                // Add the product to the wishlist
                const response = await fetch('https://localhost:7251/api/WishlistItems', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        CustomerId: customerId,
                        ProductId: product.productId,
                        AddedDate: new Date().toISOString() // Use the current date
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to add item to wishlist');
                }

                const addedItem = await response.json();
                setWishlist(prevWishlist => [...prevWishlist, product.productId]);
                console.log('Added item to wishlist:', addedItem);

                alert('Product added to wishlist');
            } catch (error) {
                console.error('Error selecting product:', error);
            }
        }
    };

    const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedData = filteredProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div>
            <TextField
                label="Search by name"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                style={{ marginBottom: "20px", display: 'flex', justifyContent: 'left', width: '15%' }}
            />
            <Grid container spacing={3}>
                {paginatedData.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                        <StyledCard>
                            <Link key={product.name} to={`${routes.detail}/${product.productId}`}>
                                <StyledCardMedia
                                    image={product.image1}
                                    title={product.productName}
                                    style={{
                                        height: '300px',
                                    }}
                                />
                                <StyledCardContent>
                                    <ProductName variant="body2" color="textSecondary" component="p">
                                        {product.productName}
                                    </ProductName>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        N/a
                                    </Typography>
                                    <PriceTypography variant="h6" component="p" style={{ color: 'black' }}>
                                        Price: {product.price} ₫
                                    </PriceTypography>
                                </StyledCardContent>
                            </Link>
                            <div style={{ display: 'flex', alignItems: 'left' }}>
                                <Checkbox
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite sx={{ color: 'red' }} />}
                                    checked={wishlist.includes(product.productId)}
                                    onChange={() => handleSelectProduct(product, null)} 
                                />
                            </div>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
            <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
                <PaginationControlled
                    count={totalPage}
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </div>
    );
};

export default ProductCard;
