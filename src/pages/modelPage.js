import React, { useState } from 'react'
import Layout from '../components/layout'
import { Row, Col, Modal, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function ModelPage({
  global,
  homepage,
  services,
  models,
  amenities,
  homeSlider,
}) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Layout global={global}>
      <Col key={`model-item`}>
        {/* <h3>{model.title}</h3>
        <p>{model.price}</p>
        <p>{model.description}</p> */}
        asdas
        <Button variant="primary" onClick={handleShow}>
          {/* {model.btnText} */}asda
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <iframe
                  width="100%"
                  height="360"
                  src={`https://roundme.com/embed/${792292}/${2501791}`}
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Col>
    </Layout>
  )
}

export default ModelPage
