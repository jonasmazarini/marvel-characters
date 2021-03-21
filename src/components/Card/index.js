import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, thumbnail, extension }) => {
  return (
    <Link to={`/character/${id}`}>
      <div className="grow ma2 dib">
        <div className="cardContainer">
          <h2 className="characterName">{name}</h2>
          <img src={`${thumbnail}.${extension}`} className="characterImage" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
