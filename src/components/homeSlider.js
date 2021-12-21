import React from 'react'
import { Carousel, Col } from 'react-bootstrap'

const HomeSlider = ({ homeSlider, lg }) => {
  return (
    <Col lg={lg} className="slider-container text-light">
      <Carousel fade indicators={false}>
        {homeSlider &&
          homeSlider?.map((slide, index) => (
            <Carousel.Item key={`slide-${index}`}>
              <img
                className="d-block w-100"
                src={slide.background?.url}
                alt={slide.background?.caption}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </Col>
  )
}

export default HomeSlider
