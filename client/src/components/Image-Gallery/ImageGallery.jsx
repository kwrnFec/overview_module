import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';
import { render } from 'enzyme';

// import Crop from '../../../media/Crop.png';

const ControlledCarousel = ({ currentStyle }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderThumbnails = () => (currentStyle.photos && (
    currentStyle.photos.map((thumbnail, i) => (
      <div className="thumnails-list">
        <img
          className="d-block thumbnail-image"
          src={thumbnail.url}
          alt="thumbnail"
          onClick={() => setIndex(i)}
        />
      </div>
    ))
  ));

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={false}
        interval={null}
        wrap={false}
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {currentStyle.photos && (
          currentStyle.photos.map((photo) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={photo.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        )}
      </Carousel>
      {/* <button type="submit">
        <img
          id="zoom-icon"
          src={Crop}
          alt="zoom"
        />
      </button> */}

      <div className="thumbnails-container">
        <div>{renderThumbnails()}</div>
      </div>
    </div>
  );
};

export default ControlledCarousel;
