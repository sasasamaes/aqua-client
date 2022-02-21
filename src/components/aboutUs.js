import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AboutUs = ({ lg, partners }) => {
  return (
    <Col lg={lg} className="about-container bg-light container-fluid pb-5">
      <Row>
        <Col lg={12} className="about-banner bg-dark py-4 text-white">
          <Row>
            <Col lg={8}>
              <h3>QUIENES SOMOS</h3>
            </Col>
            <Col lg={3}>
              <a href="#form">
                <Button variant="primary" type="submit">
                  Contactanos
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={12} className="about-img center">
          <Row className="flex-column justify-content-center align-items-center">
            {partners.map((partner, index) => (
              <Col lg={4} className="border border-3 my-4 p-4 ">
                <Link
                  to={`/about-us/${partner.id}`}
                  key={index}
                  className="text-black"
                >
                  <h3>{partner.title}</h3>
                  <img src={partner.logo.url} alt={partner.logo.caption} />
                  {partner.image}
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default AboutUs
