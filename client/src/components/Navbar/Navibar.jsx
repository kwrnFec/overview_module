import React from 'react';

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navibar = () => (
  <Navbar bg="dark" variant="dark" className="nav-bar navbar-container">
    <Navbar.Brand href="#home">
      <img
        src="https://images-overview1.s3-us-west-2.amazonaws.com/elysium-cube.svg"
        width="77"
        height="77"
        className="d-inline-block align-top logo"
        alt=""
      />
    </Navbar.Brand>
    <span>
      <Navbar.Brand href="#home">
        <span>
          <h3 className="nav-title">
            E l y s i u m
          </h3>
        </span>
        <span>
          <h3 className="nav-title">
            S o l u t i o n s
          </h3>
        </span>
      </Navbar.Brand>
    </span>
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
