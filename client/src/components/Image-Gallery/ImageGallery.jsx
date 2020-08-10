import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productId, setProductId] = useState([]);
  const [image, setImage] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    Axios.get(
      `http://52.26.193.201:3000/products/${Math.floor(Math.random() * 1000)}/styles`)
      .then((res) => {
        console.log('RES DATA IMG GAL: ', res.data.results);
        setIsLoaded(true);
        setProductId(res.data.results);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      }
      );
  }, []);

  return (
    <Carousel
      autoPlay={false}
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {productId.map((product) =>
        product.photos.map((photo) => (
          <Carousel.Item>
            <img className='d-block w-100' src={photo.url} alt='First slide' />
          </Carousel.Item>
        ))
      )}
    </Carousel>
  );
};

export default ControlledCarousel;
