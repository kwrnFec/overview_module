import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  FacebookShareCount,
  PinterestShareCount,
} from 'react-share';

const ProductInformation = ({
  originalPrice,
  salePrice,
  productName,
  productCategory,
  setDisplayedPrice
}) => {
  const shareUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const title = 'Rick Rolled!';

  const setPrice = (price) => {
    setDisplayedPrice(price);
    return '$' + price;
  };

  return (
    <div>
      <span className="stars-reviews reviews-share-inline">
        stars Read all reviews
      </span>
      {' '}
      <span className="reviews-share-inline">
        <div className="some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className="some-network">
          <PinterestShareButton
            className="some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>
      </span>
      <p className="product-category">{productCategory && productCategory.toUpperCase()}</p>
      <h1 className="product-name">{productName}</h1>
      {salePrice === '0' ? (
        <div>
          <p className="display-price"> {setPrice(originalPrice)}</p>
        </div>
      ) : (
        <div>
          <span className="sale-price-block display-price">
            {setPrice(salePrice)}
          </span>
          {' '}
          <span className="sale-price-block" id="struck-price">
            {'$' + originalPrice}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
