import React from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const ShoppingCart = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* Render custom icon here */}
      &#x25bc;
      {children}
    </a>
  ));
  return (
    <Container>
      <Row>
        <Col>


          {/* <DropdownButton bsPrefix="cart-select-size" id="dropdown-basic-button" title="SELECT SIZE">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton> */}
        </Col>
        <Col>1</Col>
      </Row>
      <Row>
        <Col>ADD TO BAG</Col>
        <Col>STAR</Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
