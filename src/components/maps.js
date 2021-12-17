import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const Maps = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="maps-container bg-dark text-light">
      <img
        src={homepage?.maps?.background.url}
        alt={homepage?.maps?.background.caption}
      />
    </Col>
  )
}

export default Maps
