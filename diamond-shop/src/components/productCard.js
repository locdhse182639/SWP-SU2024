import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import PaginationControlled from './pagination';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

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

    const handleChangePage = (event, value) => {
        setPage(value);
        console.log(value);
    };

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        // SetPage(1);
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
                        <Link key={product.name} to={`${routes.detail}/${product.id}`}>
                            <StyledCard>
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
                            </StyledCard>
                        </Link>
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
