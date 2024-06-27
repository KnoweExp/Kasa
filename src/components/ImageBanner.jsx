import React from "react";
import "./ImageBanner.sass";

function ImageBanner(props) {
  const imageUrl = props.imageUrl
    ? props.imageUrl
    : "https://via.placeholder.com/1440x400";

  return (
    <div className="ImageBanner">
      <img src={imageUrl} alt="1er image carrousel" />
    </div>
  );
}

export default ImageBanner;
