import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MasterPlan = ({ homepage, lg, amenities }) => {
  return (
    <Col lg={lg} className="master-container bg-light " c>
      <Row>
        <Col lg={12} className="master-img">
          <img
            src={homepage?.masterPlan?.background.url}
            alt={homepage?.masterPlan?.background.caption}
          />
        </Col>
      </Row>
    </Col>
  )
}

export default MasterPlan
