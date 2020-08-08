import React, { Component } from 'react';

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
      // <Container fluid className='full-container'>
      //   <Navibar />
      //   <Container className='announcement-message'>
      //     STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT{' '}
      //     <strong>OFFER</strong>
      //     ——
      //     <u>NEW PRODUCT HIGHTLIGHT</u>
      //   </Container>
      //   <Container fluid className='main-container'>
      //     <Container className='image-gallery'>
      //       <ControlledCarousel />
      //     </Container>
      //     <Container>
      //       <Container className='product-information'>
      //         Product Information
      //       </Container>
      //       <Container className='style-selector'>Style Selector</Container>
      //       <Container className='add-to-cart'>Add to Cart</Container>
      //     </Container>
      //   </Container>
      // </Container>

      <Container fluid className='fluid-container'>
        <Navibar />
        <Row>
          <Col
            sm={{ span: 12, offset: 3 }}
            md={{ span: 12, offset: 3 }}
            lg={{ span: 12, offset: 3 }}
          >
            STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT{' '}
            <strong>OFFER</strong>
            ——
            <u>NEW PRODUCT HIGHTLIGHT</u>
          </Col>
        </Row>
        <Row>
          <Col>ImageGallery</Col>
          <Col>
            <Row xs={1} sm={1} md={1} lg={1}>
              <Col>Product Information</Col>
              <Col>Style Selector</Col>
              <Col>Add to Cart</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
