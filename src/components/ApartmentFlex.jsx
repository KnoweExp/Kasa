import React from 'react'
import "./ApartmentFlex.sass"
import Apartment from "./Apartment.jsx";

function ApartmentFlex() {
  return (
    <div className="flex">
      <Apartment/>
      <Apartment/>
      <Apartment/>
      <Apartment/>
    </div>
  )
}

export default ApartmentFlex