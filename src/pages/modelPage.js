import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function ModelPage() {
  const params = useParams()
  const [model, setModel] = useState([])
  const [global, setGlobal] = useState([])

  const fetchData = async () => {
    const url = 'https://aquacr-cms.herokuapp.com'
    try {
      const modelResponse = await fetch(`${url}/models/${params.id}`)
      const modelResponseJson = await modelResponse.json()
      setModel(modelResponseJson)

      const globalResponse = await fetch(`${url}/global`)
      const globalResponseJson = await globalResponse.json()
      setGlobal(globalResponseJson)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log('model', model)
  return (
    <Layout global={global}>
      <Col className="model-item" key={`model-item`}>
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

          <Button variant="primary" onClick={handleShow}>
            {model.btnText}
          </Button>
        </Col>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <iframe
                  title={`iframe-${params.id}`}
                  width="100%"
                  height="460"
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
