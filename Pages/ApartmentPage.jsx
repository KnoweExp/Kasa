import React from 'react'
import "./ApartmentPage.sass"
import ApartmentDescription from '../src/components/ApartmentDescription'
import ImageBanner from '../src/components/ImageBanner'

function ApartmentPage() {
  return (
    <div className="apartment-page">
        <ImageBanner />
        <div className="apartment__header">
            <div className="apartment__title">
                <h1>Crazy loft on Canal Saint Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className="apartment__tags">
                    <span>Cozy</span>
                    <span>Canak</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className="apartment__owner">
                <div className="apartment__owner__details">
                    <h3>
                        <span>Alexandre</span> 
                        <span>Dumas</span>
                    </h3>
                    <div className="apartment__owner__badge"></div>
                </div>
                <div className="apartment__owner__stars">
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="off">★</span>
                    <span className="off">★</span>
                </div>
            </div>
        </div>
        <div className="apartment__description__area">
            <ApartmentDescription />
            <ApartmentDescription />
        </div>    
    </div>
  )
}

export default ApartmentPage