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
  <Navbar bg='light' variant='light' className='nav-bar' className="navbar-container">
    <Navbar.Brand href='#home'>
      <img
        src='https://sun9-72.userapi.com/c846122/v846122963/2df4a/r2bbSNgzhR4.jpg'
        width='30'
        height='30'
        className='d-inline-block align-top'
        alt='Knight Logo'
      />
    </Navbar.Brand>
    <Nav className='mr-auto' />
    <Form inline>
      <FormControl type='text' placeholder='Search' className='mr-sm-2' />
      <Button variant=''>
        <img
          src='https://www.netclipart.com/pp/m/95-955874_search-instagram-magnifying-glass-icon.png'
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
