import React from "react";
import "./ApartmentDescription.sass";

function ApartmentDescription(props) {
  return (
    <div className="apartment__description">
      <p className="description__header">
        <span>{props.title}</span>
        <i className="fas fa-chevron-down"></i>
      </p>
      <p className="description__content">{props.content}</p>
    </div>
  );
}

export default ApartmentDescription;
