import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function ModelPage() {
  const params = useParams()
  const [model, setModel] = useState({})
  const [global, setGlobal] = useState([])

  // eslint-disable-next-line
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
  }, [params.id, fetchData])

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Layout global={global}>
      <Col className="model-item-page bg-dark text-light" key={`model-item`}>
        <Row>
          <Col lg={12} md={12} xs={12} className="model-btn-primary">
            <Link to="/">
              <Button variant="primary">Atras</Button>
            </Link>
          </Col>
          <Col lg={8}>
            <img
              src={model?.architecturalPlan?.url}
              alt={model?.architecturalPlan?.caption}
            />
          </Col>
          <Col lg={3}>
            <h3>{model.title}</h3>
            <p>{model.price}</p>
            <p>{model.description}</p>

            <Button variant="primary" onClick={handleShow}>
              {model.btnText}
            </Button>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <iframe
                  title={`iframe-${params.id}`}
                  width="100%"
                  height="460"
                  src={`https://roundme.com/embed/${model?.userRoundme}/${model?.hotpointRoundme}`}
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
