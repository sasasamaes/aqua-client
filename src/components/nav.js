import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'

const Nav = ({ global }) => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container fluid id="navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        <img src={global?.logo?.url} alt={global?.logo?.caption} />
        <p>{global ? global?.navTitle : ''}</p>
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default Nav
