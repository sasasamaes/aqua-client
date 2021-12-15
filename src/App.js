import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import ModelPage from './pages/modelPage'

function App() {
  const [homeSlider, setHomeSlider] = useState([])
  const [homepage, setHomepage] = useState()
  const [services, setServices] = useState([])
  const [models, setModels] = useState([])
  const [global, setGlobal] = useState([])
  const [amenities, setAmenities] = useState([])

  const [count] = useState(undefined)

  const fetchData = async () => {
    const url = 'https://aquacr-cms.herokuapp.com'
    try {
      const homeSliderResponse = await fetch(`${url}/home-sliders`)
      const homeSliderResponseJson = await homeSliderResponse.json()
      setHomeSlider(homeSliderResponseJson)

      const homepageResponse = await fetch(`${url}/homepage`)
      const homepageResponseJson = await homepageResponse.json()
      setHomepage(homepageResponseJson)

      const servicesResponse = await fetch(`${url}/services`)
      const servicesResponseJson = await servicesResponse.json()
      setServices(servicesResponseJson)

      const modelsResponse = await fetch(`${url}/models`)
      const modelsResponseJson = await modelsResponse.json()
      setModels(modelsResponseJson)

      const globalResponse = await fetch(`${url}/global`)
      const globalResponseJson = await globalResponse.json()
      setGlobal(globalResponseJson)

      const amenitiesResponse = await fetch(`${url}/amenities`)
      const amenitiesResponseJson = await amenitiesResponse.json()
      setAmenities(amenitiesResponseJson)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [count])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            homeSlider={homeSlider}
            homepage={homepage}
            services={services}
            models={models}
            global={global}
            amenities={amenities}
          />
        }
      />

      <Route
        path="/model/:id"
        element={<ModelPage models={models} global={global} />}
      />
    </Routes>
  )
}

export default App
