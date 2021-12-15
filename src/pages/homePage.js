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
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Homepage({
  global,
  homepage,
  services,
  models,
  amenities,
  homeSlider,
}) {
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
    </Layout>
  )
}

export default Homepage
