import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import Navibar from './Logo-And-Searchbar/Navibar.jsx';
import ControlledCarousel from './Image-Gallery/ImageGallery.jsx';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentProductName, setCurrentProductName] = useState(null);
  const [currentProductCategory, setCurrentProductCategory] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3333/products/list')
      .then((res) => {
        setIsLoaded(true);
        setProducts(res.data);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      },
      );
  }, []);

  useEffect(() => {
    Axios.get(
      `http://52.26.193.201:3000/products/${productId}/`)
      .then((res) => {
        setIsLoaded(true);
        setCurrentProduct(res.data);
        setCurrentPrice(res.data.default_price);
        setCurrentProductName(res.data.name);
        setCurrentProductCategory(res.data.category);
      },
      (err) => {
        setIsLoaded(true);
        console.log(err);
      }
      );
  }, []);

  return (
    <Container fluid className="full-container">
      <Navibar />
      <Container fluid className="announcement-message">
        <Row>
          <Col>
            STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT
            {' '}
            <strong>OFFER</strong>
            ——
            <u>NEW PRODUCT HIGHTLIGHT</u>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="image-gallery">
          <ControlledCarousel productId={productId} />
        </Col>
        <Col>
          <Row xs={1} sm={1} md={1} lg={1}>
            <Col className="product-information">Product Information</Col>
            <Col className="style-selector">Style Selector</Col>
            <Col className="add-to-cart">Add to Cart</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
