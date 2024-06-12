import React from 'react'
import "./ApartmentPage.sass"

function ApartmentPage() {
  return (
    <div className="apartment-page">
        <div>
            <img src="Carrousel_image_1.png" alt="1er image carrousel" />
        </div>
        <div className="apartment__title">
            <h1>Crazy loft on Canal Saint Martin</h1>
            <h2>Paris, Ile de France</h2>
            <p>Cozy</p>
            <p>Canak</p>
            <p>Paris 10</p>
        </div>
        <div className="apartment__owner">
            <h3>Alexandre Dumas</h3>
            <div className="apartment__owner__badge"></div>
            <div className="apartment__owner__stars">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
        </div>
        <div className="apartment__description">
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida sapien hendrerit sollicitudin mollis. In dignissim ipsum at velit mattis varius. Integer condimentum sit amet felis quis semper. Quisque sodales lacinia nunc. Duis euismod sodales semper. Aliquam erat volutpat. Aliquam lobortis mattis diam, nec tempor nibh tempus sed. Nunc mollis felis at dignissim volutpat. Phasellus at tempor quam, varius auctor lorem.</p>
        </div>
        <div className="apartment__description">
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida sapien hendrerit sollicitudin mollis. In dignissim ipsum at velit mattis varius. Integer condimentum sit amet felis quis semper. Quisque sodales lacinia nunc. Duis euismod sodales semper. Aliquam erat volutpat. Aliquam lobortis mattis diam, nec tempor nibh tempus sed. Nunc mollis felis at dignissim volutpat. Phasellus at tempor quam, varius auctor lorem.</p>
        </div>
        
    </div>
  )
}

export default ApartmentPage