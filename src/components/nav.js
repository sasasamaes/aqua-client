import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = ({ global }) => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container fluid id="navbar">
      <Link to="/">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={global?.logo?.url} alt={global?.logo?.caption} />
          <p>{global ? global?.navTitle : ''}</p>
        </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
)

export default Nav
