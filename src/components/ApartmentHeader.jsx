import React from "react";
import "./ApartmentHeader.sass";

function ApartmentHeader(props) {
  console.log("Props apartment:", props);

  const { apartment } = props;
  const { name } = apartment.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{props.apartment.title}</h1>
        <h2>{props.apartment.location}</h2>
        <div className="apartment__tags">
          {props.apartment.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            <img src={apartment.host.picture} alt="" />
          </div>
        </div>
        <div className="apartment__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={apartment.rating >= num ? "on" : "off"}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
