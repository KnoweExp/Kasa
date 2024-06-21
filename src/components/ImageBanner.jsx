import React from "react";
import "./ImageBanner.sass";

function ImageBanner(props) {
  return (
    <div className="ImageBanner">
      <img src={props.imageUrl} alt="1er image carrousel" />
    </div>
  );
}

export default ImageBanner;
