import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productId, setProductId] = useState(1);
  const [image, setImage] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // console.log("setProd: ", setProductId(productId));


  useEffect(() => {
    Axios.get(`http://52.26.193.201:3000/products/${Math.floor(Math.random() * 100)}/styles`)
      .then((res) => {
        console.log('RES DATA IMG GAL: ', res.data);
        setIsLoaded(true);
        setProductId(res.data);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      },
      );
  }, []);

  // while there is

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://preview.redd.it/ew85u34inn951.png?width=960&crop=smart&auto=webp&s=bfb28f0196407e6217258d3cbcb47df5c0828a54'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://features.japantimes.co.jp/wp-content/uploads/2019/02/tokyoknights-slide4.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://features.japantimes.co.jp/wp-content/uploads/2019/02/tokyoknights-slide1.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
