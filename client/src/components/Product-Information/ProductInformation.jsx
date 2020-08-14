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
}) => {
  const shareUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const title = 'Rick Rolled!';

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

          <div>
            <FacebookShareCount
              url={shareUrl}
              className="some-network__share-count"
            >
              {(count) => count}
            </FacebookShareCount>
          </div>
        </div>
        <div className="some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="some-network__share-count">&nbsp;</div>
        </div>
        <div className="some-network">
          <PinterestShareButton
            url={String(window.location)}
            // media={`${String(window.location)}/${exampleImage}`}
            className="some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <div>
            <PinterestShareCount url={shareUrl} className="some-network__share-count" />
          </div>
        </div>
      </span>
      <p className="product-category">{productCategory}</p>
      <h1 className="product-name">{productName}</h1>
      {salePrice === '0' ? (
        <div>
          <p className="display-price"> {'$' + originalPrice}</p>
        </div>
      ) : (
        <div>
          <span className="sale-price-block display-price">
            {'$' + salePrice}
          </span>{' '}
          <span className="sale-price-block" id="struck-price">
            {'$' + originalPrice}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
