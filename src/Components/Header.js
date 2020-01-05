import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className='text-light thumbnail'>Zoheb Boga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/' className="nav-link text-light" >Home</Link>
            <Link to='/samples' className='nav-link text-light'>Writing Samples</Link>
            <Link to='/contact' className='nav-link text-light'>Get in Touch</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
  
  export default Header