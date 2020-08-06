import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navibar = () => (
  <Container>
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>
        <img
          src='https://sun9-72.userapi.com/c846122/v846122963/2df4a/r2bbSNgzhR4.jpg'
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='Knight Logo'
        />
        Logo
      </Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-primary'>
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
  </Container>
);

export default Navibar;
