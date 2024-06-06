import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/styles';
import { Products } from './services/data/productList';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: '1px solid #ddd',
        boxShadow: 'none',
        borderRadius: '5px',
    },
    media: {
        height: 200,
    },
    favorite: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    content: {
        paddingBottom: '0 !important',
    },
    price: {
        fontWeight: 'bold',
        marginTop: '8px',
    },
    settingPrice: {
        fontSize: '12px',
        color: '#999',
    },
});

const ProductCard = ({ image, title, price, settingPrice }) => {
    const classes = useStyles();
    const product = useState([]);

    return (
        <div>
            {Products.map((product) => (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={title}
                    />
                    <IconButton aria-label="add to favorites" className={classes.favorite}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <CardContent className={classes.content}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" component="p" className={classes.price}>
                            {product.price}
                        </Typography>
                        {/* <Typography component="p" className={classes.settingPrice}>
                            ({settingPrice})
                        </Typography> */}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ProductCard;
