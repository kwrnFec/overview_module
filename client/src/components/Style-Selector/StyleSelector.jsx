import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function StyleSelector({
  product,
  productStyles,
  currentStyle,
  currentStyleIndex,
  setCurrentStyleIndex
}) {
  const [styleClicked, setStyleClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(styleClicked);

  return (
    <Container>
      {/* <Row> */}
      <Row sm={4} md={4} lg={4} xl={4}>
        {productStyles &&
          productStyles.map((style, i) => (
            // if i + 1 % 4 === 0
              //
            // <Col md={1} lg={1} className='selector-image-col'>
            <Col className='selector-image-col'>
              <Image
                onMouseOver={() => {
                  setHovered(true);
                }}
                onMouseOut={() => {
                  setHovered(false);
                }}
                onClick={() => {
                  setCurrentStyleIndex(i);
                }}
                className="selector-image"
                src={style.photos[0].thumbnail_url}
                roundedCircle
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
