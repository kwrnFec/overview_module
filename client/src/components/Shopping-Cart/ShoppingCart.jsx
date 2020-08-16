/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const ShoppingCart = ({ styleSkus, productName, styleName, displayedPrice }) => {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [qtyIdx, setQtyIdx] = useState(0);

  let inStock = true;
  for (const sku in styleSkus) {
    if ((styleSkus[sku] > 0 in styleSkus) || sku === 'null') {
      inStock = false;
    }
  }

  const clickedAndSelectSku = (size, quantity) => {
    setSelectedSize(size);
    setSelectedQuantity(quantity);
  };

  const availableQuantity = selectedQuantity >= 15 ? 15 : selectedQuantity;
  const quantityList = [];
  for (let i = 0; i < availableQuantity; i += 1) {
    quantityList.push(i + 1);
  }

  const handleQuantitySelect = (eKey) => {
    setQtyIdx(quantityList[eKey]);
    if (qtyIdx === undefined) {
      setQtyIdx(1);
      cartItem.quantity = 1;
    }
  };

  const selectSizeTitle = () => (
    selectedSize || (inStock ? 'SELECT SIZE' : 'OUT OF STOCK')
  );

  const selectQuantityTitle = () => (
    quantityList.length === 0
      ? '-'
      : !qtyIdx
        ? 1
        : qtyIdx > quantityList.length
          ? quantityList[quantityList.length - 1]
          : qtyIdx < quantityList.length
            ? qtyIdx
            : qtyIdx
  );

  const sizeSelector = () => {
    Object.entries(styleSkus).map((size, quantity) => quantity > 0 && (
      <Dropdown.Item onClick={() => clickedAndSelectSku(size[0], quantity)}>
        {size[0]}
      </Dropdown.Item>
    ));
  };

  const cartItem = {
    product: productName,
    style: styleName,
    price: displayedPrice,
    size: selectedSize,
    quantity: qtyIdx,
  };

  if (cartItem.quantity === undefined) {
    cartItem.quantity = 1;
  }

  if (cartItem) {
    console.log('cartItem: ', cartItem);
  }

  const handleShoppingCart = () => {
    if (cartItem.size === 'null') {
      alert('Please select size and quantity before continuing!');
    } else {
      cart.push(cartItem);
      alert(`Product: ${cartItem.product}, Style: ${cartItem.style}, Size: ${cartItem.size}, QTY: ${cartItem.quantity}, Total: ${cartItem.price}, `)
    }
  };

  return (
    <Container fluid className="shopping-cart-container">
      <Row xs={3}>
        <Col>
          <DropdownButton
            bsPrefix="cart-select-size"
            id="dropdown-basic-button dropdown-chevron"
            title={selectSizeTitle()}
          >
            {
            Object.entries(styleSkus).map((size, quantity) => quantity > 0 && (
            <Dropdown.Item onClick={() => clickedAndSelectSku(size[0], quantity)}>
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
            title={quantityList.length === 0
              ? '-'
              : !qtyIdx
                ? 1
                : qtyIdx > quantityList.length
                  ? quantityList[quantityList.length - 1]
                  : qtyIdx < quantityList.length
                    ? qtyIdx
                    : qtyIdx}
          >
            {quantityList.map((quantity, i) => (
              <Dropdown.Item eventKey={i} onSelect={handleQuantitySelect}>
                {quantity}
              </Dropdown.Item>
            ))}
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
