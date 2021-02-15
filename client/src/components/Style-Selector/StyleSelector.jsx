import React from 'react';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';

export default function StyleSelector({
  productStyles,
  setCurrentStyleIndex,
  currentStyleId,
  styleName,
}) {
  return (
    <Container>
      <div>
        <span className="style-selector-span">
          <b id="style-bold">STYLE &gt;</b>
        </span>
        {' '}
        <span className="style-selector-span">
          {styleName && styleName.toUpperCase()}
        </span>
      </div>
      <Row sm={4} md={4} lg={4} xl={4}>
        {productStyles
          && React.Children.toArray(
            productStyles.map(
              (style, i) => i <= 7 && (
              <Col className="selector-image-col">
                <Image
                  onClick={() => {
                    setCurrentStyleIndex(i);
                  }}
                  src={style.photos[0].thumbnail_url}
                  roundedCircle
                />
                {currentStyleId === style.style_id && (
                <div className="selector-checkmark" />
                )}
              </Col>
              ),
            ),
          )}
      </Row>
    </Container>
  );
}
