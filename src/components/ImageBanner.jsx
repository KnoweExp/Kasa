import React, { useState } from "react";
import "./ImageBanner.sass";

// This component is used to display a carousel of images
function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
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

  // This function is used to check if there are pictures available
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // This function is used to get the carousel or the default image
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return;
      <img src="https://via.placeholder.com/800x400" className="show" alt="" />;
    }
    return pictures.map((picture, i) => (
      <img src={picture} alt="" key={picture} className={getClassName(i)} />
    ));
  };

  return (
    <div className="ImageBanner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;
