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
  grid-template-columns: 200px 200px 200px 200px;
  column-gap: 10px;
`;

export default CardsGrid;
