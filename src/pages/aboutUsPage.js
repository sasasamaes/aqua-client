import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { Row, Col, Carousel } from 'react-bootstrap'
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function AboutUsPage() {
  const params = useParams()
  const [partner, setPartner] = useState({})
  const [global, setGlobal] = useState([])

  // eslint-disable-next-line
  const fetchData = async () => {
    const url = 'https://aquacr-cms.herokuapp.com'
    try {
      const partnerResponse = await fetch(`${url}/partners/${params.id}`)
      const partnerResponseJson = await partnerResponse.json()
      setPartner(partnerResponseJson)

      const globalResponse = await fetch(`${url}/global`)
      const globalResponseJson = await globalResponse.json()
      setGlobal(globalResponseJson)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Layout global={global}>
      <Nav global={global} color="light" type="page" title={partner.title} />

      <Col className="about-page" key={`about-item`}>
        <Row>
          <Col lg={7}>
            <img
              src={partner?.logo?.url}
              alt={partner?.logo?.caption}
              className="about-logo"
            />
            <p>{partner.description}</p>
            <a href={partner.url}>{partner.url}</a>
          </Col>
          <Col lg={5}>
            <Carousel>
              {partner &&
                partner?.slider?.map((slide, index) => (
                  <Carousel.Item key={`slide-${index}`}>
                    <img src={slide.url} alt={slide.caption} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col lg={7}>
            <p>{partner.extraText}</p>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default AboutUsPage
