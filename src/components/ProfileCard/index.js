import React from "react";
import { Link } from "react-router-dom";


//Create the profile card to show when the user click on a characterm(still not working)
const ProfileCard = ({ id, name, thumbnail, extension , description}) => {
  return (
    <Link to={`/character/${id}`}>
        <div className="cardContainer">
          <img src={`${thumbnail}.${extension}`} className="characterImage" alt={name}/>
          <h2 className="characterName">{name}</h2>
          <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
