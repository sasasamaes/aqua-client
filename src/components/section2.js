import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const Section2 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section2-container bg-dark text-light">
      <Row>
        {/* <h3>{homepage && homepage.section2.title}</h3> */}
        <img
          src={homepage?.section2?.background.url}
          alt={homepage?.section2?.background.caption}
        />
        {/* <p>{homepage && homepage.section2.description}</p> */}
      </Row>
    </Col>
  )
}

export default Section2
