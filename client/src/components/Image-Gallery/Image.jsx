import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Image = () => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://preview.redd.it/ew85u34inn951.png?width=960&crop=smart&auto=webp&s=bfb28f0196407e6217258d3cbcb47df5c0828a54"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
);

export default Image;
