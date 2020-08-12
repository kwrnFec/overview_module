import React from 'react';

const ProductInformation = ({
  originalPrice,
  salePrice,
  productName,
  productCategory,
}) => (
  <div>
    <p className="stars-reviews">stars Read all reviews</p>
    <p className="product-category">{productCategory}</p>
    <h1 className="product-name">{productName}</h1>
    {salePrice === '0' ? (
      <div>
        <p className="display-price"> {'$' + originalPrice}</p>
      </div>
    ) : (
      <div>
        <span className="sale-price-block display-price">{'$' + salePrice}</span>{' '}
        <span className="sale-price-block" id="struck-price">{'$' + originalPrice}</span>
      </div>
    )}
  </div>
);

export default ProductInformation;
