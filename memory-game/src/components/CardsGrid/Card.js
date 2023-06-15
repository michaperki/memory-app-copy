import React from "react";

const Card = ({ character, handleCardClick }) => {
  return (
    <div onClick={handleCardClick}>
      <image src={character.image} alt={pokemon.name} />
      <p>{character.name}</p>
    </div>
  );
};

export default Card;