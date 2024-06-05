import React from 'react';
import ProductItem from './ProductItem';
import '../../../css/productList.css';
import pic1 from '../../../../public/assets/images/ThreeStone_ER.png'


const ProductList = () => {
    const products = [
        {
            image: pic1,
            name: 'Nhẫn cầu hôn Love of Swan NCH0037',
            price: '12.308.000',
            oldPrice: '14.480.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
        {
            image: pic1,
            name: 'Nhẫn cầu hôn solitaire Water Lily NCH1003',
            price: '10.591.000',
            oldPrice: '12.460.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
        {
            image: pic1,
            name: 'Nhẫn cầu hôn Solitaire Love Shine NCH1004',
            price: '14.679.500',
            oldPrice: '17.970.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
        {
            image: pic1,
            name: 'Nhẫn cầu hôn Solitaire Primrose flower NCH1005',
            price: '12.359.000',
            oldPrice: '14.540.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
        {
            image: pic1,
            name: 'Nhẫn cầu hôn Solitaire Double Heart NCH1007',
            price: '10.302.000',
            oldPrice: '12.080.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
        {
            image: pic1,
            name: 'Nhẫn cầu hôn Solitaire Roselle Hibiscus NCH1010',
            price: '9.596.500',
            oldPrice: '12.080.000',
            colors: ['#D4AF37', '#C0C0C0', '#E5E4E2']
        },
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
