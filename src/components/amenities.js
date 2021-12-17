import React, { useState } from 'react'
import { Row, Col, Modal } from 'react-bootstrap'
import AmenitySlider from './amenitySlider'

const Amenities = ({ amenities, lg }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState({ modal: undefined })
  const handleClose = () => setShow(false)

  const handleShow = (amenity) => {
    setModal({ modal: amenity?.modal?.url, caption: amenity?.modal?.caption })
    setShow(true)
  }
  return (
    <Col lg={lg} className="amenities-container bg-light">
      <Col lg={5} className="amenities-menu">
        <Row>
          {amenities &&
            amenities?.map((amenity, index) => (
              <>
                <Col
                  lg={3}
                  key={`amanity-${index}`}
                  className="amenity"
                  onClick={() => handleShow(amenity)}
                >
                  <h3>{amenity.title}</h3>
                  <img src={amenity.icon?.url} alt={amenity.icon?.caption} />
                </Col>
              </>
            ))}
        </Row>
      </Col>
      <Col lg={6} className="amenities-slider">
        <AmenitySlider amenities={amenities} />
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Col>
            {console.log(modal)}
            <img src={modal?.modal} alt={modal?.caption} />
          </Col>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default Amenities
