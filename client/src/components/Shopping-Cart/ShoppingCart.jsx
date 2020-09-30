/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  Container, Row, Col, DropdownButton, Dropdown, Button, Modal, Alert,
} from 'react-bootstrap';

const ShoppingCart = ({
  styleSkus, productName, styleName, originalPrice, salePrice,
}) => {
  const [cart, setCart] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [qtyIdx, setQtyIdx] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const displayedPrice = salePrice === '0' ? originalPrice : salePrice;

  const cartItem = {
    product: productName,
    style: styleName,
    price: displayedPrice,
    size: selectedSize,
    quantity: qtyIdx,
  };

  const handleQuantitySelect = (eKey) => {
    setQtyIdx(quantityList[eKey]);
    if (qtyIdx === undefined) {
      cartItem.quantity = 1;
    }
  };

  if (cartItem.quantity === undefined || cartItem.quantity === 0) {
    cartItem.quantity = 1;
  }

  // if (cartItem) {
  //   console.log('cartItem: ', cartItem);
  // }

  const handleSelectSize = () => (
    Object.entries(styleSkus).map((size, quantity) => quantity > 0 && (
      <Dropdown.Item onClick={() => clickedAndSelectSku(size[0], quantity)}>
        {size[0]}
      </Dropdown.Item>
    ))
  );

  const handleSelectQuantity = () => (
    quantityList.map((quantity, i) => (
      <Dropdown.Item eventKey={i} onSelect={handleQuantitySelect}>
        {quantity}
      </Dropdown.Item>
    ))
  );

  const handleShoppingCart = () => {
    if (!cartItem.size) {
      return alert('Please select a size');
    }
    setCart(cartItem);
    return handleShow();
  };

  // if (Object.entries(cart).length > 0) {
  //   console.log('cart: ', cart);
  // }

  return (
    <Container className="shopping-cart-container">
      <Row>
        <Col md={4}>
          <DropdownButton
            bsPrefix="cart-select-size"
            id="dropdown-basic-button dropdown-chevron"
            title={selectSizeTitle()}
          >
            {handleSelectSize()}
          </DropdownButton>
        </Col>
        <Col md={2}>
          <DropdownButton
            bsPrefix="cart-select-quantity"
            id="dropdown-basic-button"
            title={selectQuantityTitle()}
          >
            {handleSelectQuantity()}
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Button
            bsPrefix="shopping-cart-btn"
            variant="primary"
            onClick={() => handleShoppingCart()}
          >
            <span>ADD TO BAG</span>
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {`Product: ${cartItem.product}, Style: ${cartItem.style}, Size: ${cartItem.size}, QTY: ${cartItem.quantity}, Total: ${cartItem.price}, `}
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsPrefix="shopping-cart-modal-cancel"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
              <Button
                variant="primary"
                bsPrefix="shopping-cart-modal-add"
                onClick={handleClose}
              >
                ADD
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
