import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ currentStyle }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderThumbnails = () => (currentStyle.photos && (
    currentStyle.photos.map((thumbnail, i) => (
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

      <div className="thumbnails-container">
        <div className="thumnails-list">{renderThumbnails()}</div>
      </div>
    </div>
  );
};

export default ControlledCarousel;
