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
        <h3> {'$' + originalPrice}</h3>
      </div>
    ) : (
      <div className="sale-price-block">
        <h3>{'$' + salePrice}</h3> <p id="struck-price">{'$' + originalPrice}</p>
      </div>
    )}
  </div>
);

export default ProductInformation;
