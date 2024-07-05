import React, { useState } from "react";
import "./ApartmentDescription.sass";

function ApartmentDescription(props) {
  // Déclaration d'un état local pour contrôler la visibilité du contenu
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Fonction pour basculer la visibilité du contenu
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Construction de la classe CSS en fonction de l'état de visibilité du contenu
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
