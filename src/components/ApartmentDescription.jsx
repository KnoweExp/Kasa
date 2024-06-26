import React, { useState } from "react";
import "./ApartmentDescription.sass";

function ApartmentDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="apartment__description">
      <p className="description__header">
        <span>{props.title}</span>
        <i className="fas fa-chevron-up" onClick={showContent}></i>
      </p>

      {isContentVisible && (
        <div className="description__content">{props.content}</div>
      )}
    </div>
  );
}

export default ApartmentDescription;
