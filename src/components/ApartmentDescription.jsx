import React from "react";
import "./ApartmentDescription.sass";

function ApartmentDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <div className="apartment__description">
      <p className="description__header">
        <span>{props.title}</span>
        <i className="fas fa-chevron-down"></i>
      </p>

      {isContentVisible && (
        <div className="description__content">{props.content}</div>
      )}
    </div>
  );
}

export default ApartmentDescription;
