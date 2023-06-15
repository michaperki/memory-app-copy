import React from "react";
import styled from "styled-components";

const Card = ({ character, handleCardClick }) => {
  return (
    <CardWrapper onClick={handleCardClick}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: lightgrey;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  align-items: center;
  border: 1px solid black;

  img {
    width: 150px;
    height: 150px;
  }
`;

export default Card;
