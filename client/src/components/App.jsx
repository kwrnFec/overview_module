import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Navibar from './Logo-And-Searchbar/Navibar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className='container' fluid>
        <Row className='row-zero'>
          <Col>
            <Navibar />
          </Col>
          {/* <div>
            <p>
              SITE-WIDE ANNOUNCEMENTS MESSAGE! —— SALE / DISCOUNT{' '}
              <strong>OFFER</strong> —— <u>NEW PRODUCT HIGHLIGHT</u>
            </p>
          </div> */}
        </Row>
        <Row className='row-one' xl={9}>
          <Col className='col image-gallery-col' md={9}>
            image gallery
          </Col>
          <Col className='col star-ratings-col' md={3}>
            star ratings
          </Col>
        </Row>

        <Row>
          <Col>
            CATEGORY
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
