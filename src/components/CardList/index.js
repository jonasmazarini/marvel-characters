import React from "react";
import Card from "../Card";

//Import characters card and create the list

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            thumbnail={character.thumbnail.path}
            extension={character.thumbnail.extension}
          />
        );
      })}
    </div>
  );
};

export default CardList;
