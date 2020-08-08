import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import Navibar from './Logo-And-Searchbar/Navibar.jsx';
import ControlledCarousel from './Image-Gallery/ImageGallery.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid className='full-container'>
        <Navibar />
        <Container className='announcement-message'>
          STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT{' '}
          <strong>OFFER</strong>
          ——
          <u>NEW PRODUCT HIGHTLIGHT</u>
        </Container>
        <Container fluid className='main-container'>
          <Container className='image-gallery'>
            <ControlledCarousel />
          </Container>
          <Container>
            <Container className='product-information'>
              Product Information
            </Container>
            <Container className='style-selector'>Style Selector</Container>
            <Container className='add-to-cart'>Add to Cart</Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;
