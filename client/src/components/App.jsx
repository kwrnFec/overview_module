import React, { Component } from 'react';
import Axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
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
        <Container fluid className='announcement-message'>
          <Row>
            <Col>
              STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT{' '}
              <strong>OFFER</strong>
              ——
              <u>NEW PRODUCT HIGHTLIGHT</u>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col className='image-gallery'>
            <ControlledCarousel />
          </Col>
          <Col>
            <Row xs={1} sm={1} md={1} lg={1}>
              <Col className='product-information'>Product Information</Col>
              <Col className='style-selector'>Style Selector</Col>
              <Col className='add-to-cart'>Add to Cart</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
