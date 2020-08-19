/* eslint-disable import/extensions */
import React from 'react';
import Stars from './Stars.jsx';
import Share from './Share.jsx';

const ProductInformation = ({
  originalPrice,
  salePrice,
  productName,
  productCategory,
  reviewsList
}) => (
  <div>
    <div>
      <Stars reviewsList={reviewsList} />
    </div>
    <Share />
    <p className="product-category">{productCategory && productCategory.toUpperCase()}</p>
    <h1 className="product-name">{productName}</h1>
    {salePrice === '0' ? (
      <div>
        <p className="display-price">
          {' '}
          {`$${originalPrice}`}
        </p>
      </div>
    ) : (
      <div>
        <span className="sale-price-block display-price">
          {`$${salePrice}`}
        </span>
        {' '}
        <span className="sale-price-block" id="struck-price">
          {`$${originalPrice}`}
        </span>
      </div>
    )}
  </div>
);

export default ProductInformation;
