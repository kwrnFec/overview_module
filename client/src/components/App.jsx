/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import Navibar from './Navbar/Navibar.jsx';
import ControlledCarousel from './Image-Gallery/ImageGallery.jsx';
import ProductDescription from './Product-Description/ProductDescription.jsx';
import ProductInformation from './Product-Information/ProductInformation.jsx';
import StyleSelector from './Style-Selector/StyleSelector.jsx';
import ShoppingCart from './Shopping-Cart/ShoppingCart.jsx';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [productId, setProductId] = useState(1);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentStyleId, setCurrentStyleId] = useState(1);
  const [originalPrice, setOriginalPrice] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [styleName, setStyleName] = useState(null);
  const [styleSkus, setStyleSku] = useState({});
  const [reviewsList, setReviewsList] = useState([]);
  const prefix = '/ov';

  useEffect(() => {
    Axios.get(`${prefix}/products/${productId}/`)
    // Axios.get(`http://18.224.200.47/products/${productId}/`)
      .then((res) => {
        console.log('product: ', res.data);
        setIsLoaded(true);
        setProduct(res.data);
        setProductName(res.data.name);
        setProductCategory(res.data.category);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, [productId]);

  useEffect(() => {
    Axios.get(`${prefix}/products/${productId}/styles`)
    // Axios.get(`http://18.224.200.47/products/${productId}/styles`)
      .then((res) => {
        setIsLoaded(true);
        console.log('currentStyle: ', res.data.results[currentStyleIndex]);
        setProductStyles(res.data.results);
        setCurrentStyle(res.data.results[currentStyleIndex]);
        setCurrentStyleId(res.data.results[currentStyleIndex].style_id);
        setStyleName(res.data.results[currentStyleIndex].name);
        setOriginalPrice(res.data.results[currentStyleIndex].original_price);
        setSalePrice(res.data.results[currentStyleIndex].sale_price);
        setStyleSku(res.data.results[currentStyleIndex].skus);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, [productId, currentStyleIndex]);

  useEffect(() => {
    Axios.get(`${prefix}/reviews/${productId}/list`)
      .then((res) => {
        setIsLoaded(true);
        console.log('reviewsList: ', res.data.results);
        setReviewsList(res.data.results);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, [productId]);

  if (err) {
    return (
      <div>
        Error:
        {err.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Loading...</div>;
  } return (
    <Container fluid>
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
      <Container fluid className="full-container">
      <Row>
        <Col className="image-gallery">
          <ControlledCarousel currentStyle={currentStyle} />
        </Col>
        <Col>
          <Row>
            <Col xs={12} className="product-information">
              <ProductInformation
                reviewsList={reviewsList}
                productName={productName}
                productCategory={productCategory}
                originalPrice={originalPrice}
                salePrice={salePrice}
              />
            </Col>
            <Col xs={6} className="style-selector">
              <StyleSelector
                productStyles={productStyles}
                setCurrentStyleIndex={setCurrentStyleIndex}
                currentStyleId={currentStyleId}
                styleName={styleName}
              />
            </Col>
            <Col xs={12} className="add-to-cart">
              <ShoppingCart
                productStyles={productStyles}
                styleSkus={styleSkus}
                productName={productName}
                styleName={styleName}
                originalPrice={originalPrice}
                salePrice={salePrice}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="product-description">
          {product && (
            <ProductDescription product={product} />
          )}
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default App;
