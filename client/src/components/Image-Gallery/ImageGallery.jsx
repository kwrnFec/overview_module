import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';
import { render } from 'enzyme';

const ControlledCarousel = ({ currentProductId }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderThumbnails = () => (currentProductId.photos && (
    currentProductId.photos.map((thumbnail, i) => (
      <img
        className="d-block thumbnail-image"
        src={thumbnail.url}
        alt="thumbnail"
        onClick={() => setIndex(i)}
      />
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
        {currentProductId.photos && (
          currentProductId.photos.map((photo) => (
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

      <div className="thumbnails-container">
        <div className="thumnails-list">{renderThumbnails()}</div>
      </div>
    </div>
  );
};

export default ControlledCarousel;
