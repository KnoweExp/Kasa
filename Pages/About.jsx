import React from 'react'
import ApartmentDescription from '../src/components/ApartmentDescription'
import ImageBanner from '../src/components/ImageBanner'
import "./About.sass"

function About() {
  return <>
  <ImageBanner />
  <div className="about__container">
      <ApartmentDescription />
      <ApartmentDescription />
      <ApartmentDescription />
      <ApartmentDescription />
  </div>
  </>
}

export default About