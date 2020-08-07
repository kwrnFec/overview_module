import React, { Component } from 'react';

import StarRating from 'react-bootstrap-star-rating';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <StarRating defaultValue={5} min={0} max={5} step={0.25} />;
  }
}

export default Stars;
