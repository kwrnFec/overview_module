import React from 'react';

const ProductDescription = ({ product }) => (
    <div>
      <h1>{product.slogan}</h1>
      <p>{product.description}</p>
    </div>
);

export default ProductDescription;
