import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('product-detail'));
