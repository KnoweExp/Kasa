import React, { useState } from "react";
import "./ImageBanner.sass";

// This component is used to display a carousel of images
function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'image active
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // This function is used to move to the previous image
  const moveToPrevious = () => {
    const nexCurrentPicture = currentPicture - 1;
    if (nexCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Fonction pour vérifier si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carrousel ou une image par défaut
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      // Si pas d'images, afficher une image par défaut
      return;
      <img src="https://via.placeholder.com/800x400" className="show" alt="" />;
    }
    // Sinon, mapper chaque image à un élément <img> avec la classe appropriée
    return pictures.map((picture, i) => (
      <img src={picture} alt="" key={picture} className={getClassName(i)} />
    ));
  };

  return (
    <div className="ImageBanner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && pictures.length > 1 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;
