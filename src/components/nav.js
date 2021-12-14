import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'

const Nav = ({ global }) => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container fluid id="navbar">
      <Row>
        <Col lg={4}>
          <Navbar.Brand href="/">
            <img src={global?.logo?.url} alt={global?.logo?.caption} />
          </Navbar.Brand>
        </Col>
        <Col lg={6}>
          <p>{global ? global?.navTitle : ''}</p>
        </Col>
      </Row>
    </Container>
  </Navbar>
)

export default Nav
