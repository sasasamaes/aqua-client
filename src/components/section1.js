import React from 'react'
import { Col } from 'react-bootstrap'

const Section1 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section1-container bg-dark text-light">
      <img
        src={homepage?.section1?.background.url}
        alt={homepage?.section1?.background.caption}
      />
    </Col>
  )
}

export default Section1
