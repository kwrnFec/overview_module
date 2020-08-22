import React from 'react';

const Share = () => (
  <div>
    <div className="some-network">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://images-overview1.s3-us-west-2.amazonaws.com/facebook.png"
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
          src="https://images-overview1.s3-us-west-2.amazonaws.com/twitter.png"
          alt="Twitter Icon"
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
          src="https://images-overview1.s3-us-west-2.amazonaws.com/pinterest.png"
          alt="Pinterest Icon"
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
          src="https://images-overview1.s3-us-west-2.amazonaws.com/insta.png"
          alt="Instagram Icon"
          className="some-network__share-button"
        />
      </a>
    </div>
  </div>
);

export default Share;
