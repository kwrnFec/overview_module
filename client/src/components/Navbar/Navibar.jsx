import React from 'react';

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navibar = () => (
  <Navbar className="nav-bar navbar-container">
    <Navbar.Brand href="#home">
      {/* <img
        src="https://i.imgur.com/NZYErNZ.png"
        width="200"
        height="60"
        className="d-inline-block align-top logo"
        alt=""
      /> */}
      {/* GREENFIELD */}
    </Navbar.Brand>
    <Nav className="mr-auto" />
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="">
        <img
          src="https://ds3sleep.com/wp-content/uploads/2019/05/screen-white-icong.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Magnifying Glass Icon"
        />
      </Button>
    </Form>
  </Navbar>

);

export default Navibar;
