import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Pagination, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Products } from './services/data/productList';
import PaginationControlled from './pagination';

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

const ProductCard = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    const handleChangePage = (event, value) => {
        setPage(value);
        console.log(value);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState(Products);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        // SetPage(1);
    };

    const filteredProducts = products.filter((product) =>
        product.name.includes(searchQuery)
    );

    const paginatedData = filteredProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    console.log(paginatedData);
    const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div>
            <TextField
                label="Search by name"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                style={{ marginBottom: "20px", display:'flex', justifyContent:'left', width:'15%' }}
            />
            <Grid container spacing={3}>
                {paginatedData.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <StyledCard>
                            <StyledCardMedia
                                image={product.image}
                                title={product.name}
                                style={{
                                    height: '300px',
                                }}
                            />
                            <StyledCardContent>
                                <ProductName variant="body2" color="textSecondary" component="p">
                                    {product.name}
                                </ProductName>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    N/a
                                </Typography>
                                <PriceTypography variant="h6" component="p" style={{ color: 'black' }}>
                                    Price: {product.price} ₫
                                </PriceTypography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
            <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
                <PaginationControlled
                    count={totalPage}
                    page={page}
                    onChange={handleChangePage} />
            </div>
        </div>
    );
};

export default ProductCard;
