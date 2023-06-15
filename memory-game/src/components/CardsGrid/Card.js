import React from "react";
import styled from "styled-components";

const Card = ({ character, handleCardClick }) => {
  return (
    <CardWrapper onClick={handleCardClick}>
      <Image src={character.image} alt={character.name} />
      <Name>{character.name}</Name>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
  background-color: lightgrey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const Image = styled.img`
  padding: 0.5rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const Name = styled.p`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`

export default Card;
