import React, { useState } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap'

const Models = ({ models, lg }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Col lg={lg} className="models-container bg-light">
      <h3>Facilitamos la mejor opción para que establezca su hogar</h3>
      <Row>
        <Col className="models-menu">
          <Row>
            {models &&
              models.map((model, index) => (
                <Col key={`model-item-${index}`}>
                  <h3>{model.title}</h3>
                  <p>{model.price}</p>
                  <p>{model.description}</p>
                  <Button variant="primary" onClick={handleShow}>
                    {model.btnText}
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col>
                          <img
                            src={model?.architecturalPlan?.url}
                            alt={model?.architecturalPlan?.caption}
                          />
                        </Col>
                        <Col>
                          <h3>{model.title}</h3>
                          <p>{model.price}</p>
                          <p>{model.description}</p>
                          <Button variant="primary">RECORRIDO VIRTUAL</Button>
                        </Col>
                      </Row>
                    </Modal.Body>
                  </Modal>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Models
