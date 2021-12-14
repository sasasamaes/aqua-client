import React from 'react'
import { Carousel, Col } from 'react-bootstrap'

const HomeSlider = ({ homeSlider, lg }) => {
  return (
    <Col lg={lg} className="slider-container text-light">
      <Carousel indicators={false}>
        {homeSlider &&
          homeSlider?.map((slide, index) => (
            <Carousel.Item key={`slide-${index}`}>
              <img
                src={slide.background?.url}
                alt={slide.background?.caption}
              />
              <Carousel.Caption>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Col>
  )
}

export default HomeSlider
