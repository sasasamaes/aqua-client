import React from 'react'
import { Carousel } from 'react-bootstrap'

const AmenitySlider = ({ amenities, lg }) => {
  console.log('AmenitySlider.js: amenities: ', amenities)
  return (
    <Carousel indicators={false}>
      {amenities &&
        amenities?.map((amenity, index) => (
          <Carousel.Item key={`slide-${index}`}>
            <img src={amenity.modal?.url} alt={amenity.icon?.caption} />
            <Carousel.Caption>
              <p>{amenity.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default AmenitySlider
