import React from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import './style.sass';
import ApartmentFlex from "./components/ApartmentFlex";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartmentFlex />
      </Main>
      <Footer />
    </div>
  )
}

export default App