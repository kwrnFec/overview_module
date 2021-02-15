import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';

const ProductDescription = ({ product }) => (
  <Container fluid>
    <Row>
      <Col xs={5} className="slogan-description-col">
        <Row>
          <p id="product-slogan">{product.slogan}</p>
        </Row>
        <Row>
          <p>{product.description}</p>
        </Row>
      </Col>
      <Col xs={4} className="features-col">
        {product.features
          && React.Children.toArray(
            product.features.map((feature) => (
              <div>
                <span>
                  <CheckIcon className="feature-tick" fontSize="medium" />
                </span>
                <span id="feature-feature">
                  {feature.value === 'null'
                    ? feature.feature
                    : `${feature.feature}:`}
                </span>
                <span id="feature-value">
                  {feature.value === 'null' ? '' : feature.value}
                </span>
              </div>
            )),
          )}
      </Col>
    </Row>
  </Container>
);

export default ProductDescription;
