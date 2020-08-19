import React from 'react';
import FacebookIcon from '../../../media/facebook_icon.png';
import TwitterIcon from '../../../media/twitter_icon.png';
import PinterestIcon from '../../../media/pinterest_icon.png';
import InstagramIcon from '../../../media/instagram_icon.png';

const Share = () => (
  <div>
    <div className="some-network">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={FacebookIcon}
          alt="Facebook Icon"
          className="some-network__share-button"
        />
      </a>
    </div>
    <div className="some-network">
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={TwitterIcon}
          alt="Facebook Icon"

          className="some-network__share-button"
        />
      </a>
    </div>
    <div className="some-network">
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={PinterestIcon}
          alt="Facebook Icon"
          target="_blank"
          className="some-network__share-button"
        />
      </a>
    </div>
    <div className="some-network">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={InstagramIcon}
          alt="Facebook Icon"
          target="_blank"
          className="some-network__share-button"
        />
      </a>
    </div>
  </div>
);

export default Share;
