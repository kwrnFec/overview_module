import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navibar from './Logo-And-Searchbar/Navibar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col><Navibar /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
