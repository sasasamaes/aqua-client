import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Section2 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section2-container bg-light ">
      <h3>{homepage && homepage.section2.title}</h3>
      <Col className="section2-img">
        <img
          src={homepage?.section2?.background.url}
          alt={homepage?.section2?.background.caption}
        />
      </Col>
      <Col className="section2-text bg-dark text-light">
        <p>{homepage && homepage.section2.description}</p>
      </Col>
    </Col>
  )
}

export default Section2
