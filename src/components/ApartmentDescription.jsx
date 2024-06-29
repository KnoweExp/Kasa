import React, { useState } from "react";
import "./ApartmentDescription.sass";

function ApartmentDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // This function is used to check if the content is visible
  const contentClass =
    (isContentVisible ? "visible " : "hidden ") + "description__content";

  return (
    <div className="apartment__description">
      <p className="description__header">
        <span>{props.title}</span>
        <i className="fas fa-chevron-up" onClick={showContent}></i>
      </p>
      <div className={contentClass}>{props.content}</div>
    </div>
  );
}

export default ApartmentDescription;
