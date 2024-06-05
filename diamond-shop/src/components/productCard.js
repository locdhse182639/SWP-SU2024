import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price} đ</p>
                {product.oldPrice && (
                    <p className="old-price">{product.oldPrice} đ</p>
                )}
                <div className="color-options">
                    {product.colors.map((color, index) => (
                        <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
