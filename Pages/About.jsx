import React from "react";
import ApartmentDescription from "../src/components/ApartmentDescription";
import ImageBanner from "../src/components/ImageBanner";
import "./About.sass";

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <ApartmentDescription title="Fiabilité" content="lorem ipsum" />
        <ApartmentDescription title="Respect" content="lorem ipsum" />
        <ApartmentDescription title="Service" content="lorem ipsum" />
        <ApartmentDescription title="Responsabilité" content="lorem ipsum" />
      </div>
    </>
  );
}

export default About;
