import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ServiceComponent = ({ services, lg }) => {
  return (
    <Col lg={lg} className="service-container bg-dark">
      <Row>
        {services &&
          services.map((service, index) => (
            <Col className="service-item" key={`service-item-${index}`}>
              <h3>{service.title}</h3>
            </Col>
          ))}
      </Row>
    </Col>
  )
}

export default ServiceComponent
