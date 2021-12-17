import React from 'react'
import { Col } from 'react-bootstrap'

const MasterPlan = ({ homepage, lg, amenities }) => {
  return (
    <Col lg={lg} className="master-container bg-light " c>
      <Col lg={12} className="master-img">
        <img
          src={homepage?.masterPlan?.background.url}
          alt={homepage?.masterPlan?.background.caption}
        />
      </Col>
    </Col>
  )
}

export default MasterPlan
