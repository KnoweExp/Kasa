import React from 'react'
import "./ApartmentDescription.sass"

function ApartmentDescription() {
  return (
    <div className="apartment__description">
            <p className="description__header">
                <span>Description</span>
                <i className="fas fa-chevron-down"></i>
            </p>
            <p className="description__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida sapien hendrerit sollicitudin mollis. In dignissim ipsum at velit mattis varius. Integer condimentum sit amet felis quis semper. Quisque sodales lacinia nunc. Duis euismod sodales semper. Aliquam erat volutpat. Aliquam lobortis mattis diam, nec tempor nibh tempus sed. Nunc mollis felis at dignissim volutpat. Phasellus at tempor quam, varius auctor lorem.</p>
        </div>
  )
}

export default ApartmentDescription