import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AmenitySlider from './amenitySlider'

const Amenities = ({ amenities, lg }) => {
  return (
    <Col lg={lg} className="amenities-container bg-light">
      <Row>
        <Col lg={5} className="amenities-menu">
          <Row>
            {amenities &&
              amenities?.map((amenity, index) => (
                <Col lg={3} key={`amanity-${index}`} className="amenity">
                  <h3>{amenity.title}</h3>
                  <img src={amenity.icon?.url} alt={amenity.icon?.caption} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col lg={6} className="amenities-slider">
          <AmenitySlider amenities={amenities} />
        </Col>
      </Row>
    </Col>
  )
}

export default Amenities
