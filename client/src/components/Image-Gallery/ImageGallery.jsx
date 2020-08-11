import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';
import { render } from 'enzyme';

const ControlledCarousel = ({ productId }) => {
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentProductId, setCurrentProductId] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    Axios.get(
      `http://52.26.193.201:3000/products/${productId}/styles`)
      .then((res) => {
        console.log('RES DATA STYLES: ', res.data);
        setIsLoaded(true);
        setCurrentProductId(res.data.results);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      }
      );
  }, []);

  const renderThumbnails = () => (
    currentProductId.map((style) => (
      style.photos.map((thumbnail) => (
        <img
          className="d-block thumbnail-image"
          src={thumbnail.url}
          alt="thumbnail"
          />
      ))
    ))

  );

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={false}
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        wrap={false}
        indicators={false}
      >
        {currentProductId.map((style) => (
          style.photos.map((photo) => (
            <Carousel.Item>
              <img className='d-block w-100' src={photo.url} alt='First slide' />
            </Carousel.Item>
          ))
        ))}
      </Carousel>

      <div className="thumbnails-container">
        <div className="thumnails-list">
        {renderThumbnails()}

        </div>
      </div>
    </div>
  );
};

export default ControlledCarousel;
