import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = ({ global, type, color, title }) => {
  if (type === 'page') {
    return (
      <Navbar bg={color} variant={color}>
        <Container fluid id="navbar">
          <Link to="/">
            <Button variant="primary">Atrás</Button>
          </Link>
          <h3>{title}</h3>
        </Container>
      </Navbar>
    )
  } else {
    return (
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
  }
}

export default Nav
