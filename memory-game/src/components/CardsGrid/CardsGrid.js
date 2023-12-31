import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsGrid = ({ characters, handleCardClick }) => {
  const characterCards = characters.map((character) => (
    <Card character={character} handleCardClick={handleCardClick} />
  ));

  return <CardsGridWrapper>{characterCards}</CardsGridWrapper>;
};

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`


export default CardsGrid;
