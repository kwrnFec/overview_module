import React from 'react';

import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navibar = () => (
  <Navbar bg='dark' variant='dark' className='nav-bar' className="navbar-container">
    <Navbar.Brand href='#home'>
      <img
        src='../../stylesheets/logo.png'
        width="70"
        height='40'
        className='d-inline-block align-top'
        alt='Knight Logo'
      />
    </Navbar.Brand>
    <Nav className='mr-auto' />
    <Form inline>
      <FormControl type='text' placeholder='Search' className='mr-sm-2' />
      <Button variant=''>
        <img
          src='https://ds3sleep.com/wp-content/uploads/2019/05/screen-white-icong.png'
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='Magnifying Glass Icon'
        />
      </Button>
    </Form>
  </Navbar>

);

export default Navibar;
