/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import Navibar from './Navbar/Navibar.jsx';
import ControlledCarousel from './Image-Gallery/ImageGallery.jsx';
import ProductDescription from './Product-Description/ProductDescription.jsx';
import ProductInformation from './Product-Information/ProductInformation.jsx';
import StyleSelector from './Style-Selector/StyleSelector.jsx';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [currentProductId, setCurrentProductId] = useState({});
  const [productId, setProductId] = useState(1);
  const [style, setStyle] = useState(2);
  const [originalPrice, setOriginalPrice] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3333/products/list')
      .then((res) => {
        setIsLoaded(true);
        setProducts(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(`http://52.26.193.201:3000/products/${productId}/`)
      .then((res) => {
        console.log('DATA: ', res.data);
        setIsLoaded(true);
        setProduct(res.data);
        setProductName(res.data.name);
        setProductCategory(res.data.category);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
      .then((res) => {
        setIsLoaded(true);
        console.log('style: ', res.data.results[style]);
        setCurrentProductId(res.data.results[style]);
        setOriginalPrice(res.data.results[style].original_price);
        setSalePrice(res.data.results[style].sale_price);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, [productId, style]);

  if (err) {
    return <div>Error: {err.message}</div>;
  } if (!isLoaded) {
    return <div>Loading...</div>;
  } return (
    <Container fluid className="full-container">
      <Navibar />
      <Container fluid className="announcement-message">
        <Row>
          <Col>
            <p className="announcement">
              STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT
              {' '}
              <strong>OFFER</strong>
              ——
              <u>NEW PRODUCT HIGHTLIGHT</u>
            </p>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="image-gallery">
          <ControlledCarousel currentProductId={currentProductId} />
        </Col>
        <Col>
          <Row xs={1} sm={1} md={1} lg={1}>
            <Col className="product-information">
              <ProductInformation
                product={product}
                productName={productName}
                productCategory={productCategory}
                originalPrice={originalPrice}
                salePrice={salePrice}
              />
            </Col>
            <Col className="style-selector">
              <StyleSelector
                product={product}
                productId={productId}
              />
            </Col>
            <Col className="add-to-cart">Add to Cart</Col>
          </Row>
        </Col>
      </Row>
      <Row xs={3} sm={3} md={3} lg={3}>
        <Col className="product-description">
          {product && (
            <ProductDescription product={product} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
