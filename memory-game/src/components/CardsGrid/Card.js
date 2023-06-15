import React from "react";

const Card = ({ character, handleCardClick }) => {
  return (
    <div onClick={handleCardClick}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
};

export default Card;