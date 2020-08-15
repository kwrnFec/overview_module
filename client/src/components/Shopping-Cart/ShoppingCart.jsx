import React, { useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const ShoppingCart = ({ currentStyle, styleSkus }) => {
  const [cart, setCart] = useState([]);
  const [wasClicked, setWasClicked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  let inStock = true;
  Object.keys(styleSkus).forEach((sku) => {
    if (styleSkus[sku].length === 0 || !sku) {
      inStock = false;
    }
  });

  const clickedAndSelectSku = (size, quantity) => {
    setWasClicked(true);
    setSelectedSize(size);
    setSelectedQuantity(quantity);
  };

  const availableQuantity = selectedQuantity >= 15 ? 15 : selectedQuantity;
  const quantityList = [];
  for (let i = 0; i < availableQuantity; i += 1) {
    quantityList.push(i + 1);
  }

  return (
    <Container fluid className="shopping-cart-container">
      <Row xs={3}>
        <Col>
          <DropdownButton
            bsPrefix="cart-select-size"
            id="dropdown-basic-button dropdown-chevron"
            title={selectedSize || (inStock ? 'SELECT SIZE' : 'OUT OF STOCK')}
          >
            {
              Object.entries(styleSkus).map((size, quantity) => quantity > 0 && (
                <Dropdown.Item
                  onClick={() => clickedAndSelectSku(size[0], quantity)}
                >
                  {size[0]}
                </Dropdown.Item>
              ))
            }
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton
            bsPrefix="cart-select-quantity"
            id="dropdown-basic-button"
            title="1"
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col>ADD TO BAG</Col>
        <Col>STAR</Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
