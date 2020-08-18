import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';

const Share = () => {
  const shareUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const title = 'Rick Rolled!';

  return (
    <div>
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
    </div>
    // <div>hey there</div>
  );
};

export default Share;
