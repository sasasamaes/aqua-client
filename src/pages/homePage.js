import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import HomeSlider from '../components/homeSlider'
import FormComponent from '../components/form'
import ServiceComponent from '../components/service'
import MasterPlan from '../components/masterPlan'
import Section1 from '../components/section1'
import Banner from '../components/banner'
import Amenities from '../components/amenities'
import Section2 from '../components/section2'
import Models from '../components/models'
import Maps from '../components/maps'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Homepage() {
  const [homeSlider, setHomeSlider] = useState([])
  const [homepage, setHomepage] = useState()
  const [services, setServices] = useState([])
  const [models, setModels] = useState([])
  const [global, setGlobal] = useState([])
  const [amenities, setAmenities] = useState([])

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
  }, [])

  return (
    <Layout global={global}>
      <HomeSlider homeSlider={homeSlider} lg={9} />
      <FormComponent lg={3} homepage={homepage} global={global} />
      <ServiceComponent lg={12} services={services} />
      <MasterPlan lg={12} homepage={homepage} amenities={amenities} />
      <Section1 lg={12} homepage={homepage} />
      <Banner lg={12} homepage={homepage} global={global} />
      <Amenities lg={12} amenities={amenities} />
      <Section2 lg={12} homepage={homepage} />
      <Models lg={12} homepage={homepage} models={models} />
      <Maps lg={12} global={global} homepage={homepage} />
    </Layout>
  )
}

export default Homepage
