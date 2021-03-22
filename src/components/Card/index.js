import React from "react";
import "./Card.css";
//import { Link } from "react-router-dom";

//Creation of the characters card

const Card = ({ id, name, thumbnail, extension }) => {
  return (
   // <Link to={`/character/${id}`}>
      <div className="grow ma2 dib">
        <div className="cardContainer">
          <h2 className="characterName">{name}</h2>
          <img src={`${thumbnail}.${extension}`} className="characterImage" alt={name}/>
        </div>
      </div>
   // </Link>
  );
};

export default Card;
