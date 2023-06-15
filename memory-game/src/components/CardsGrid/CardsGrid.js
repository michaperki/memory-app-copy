import React from 'react';
import Card from './Card';

const CardsGrid = ({characters, handleCardClick}) => {
    const characterCards = characters.map((character)=>(
        <Card character={character} handleCardClick={handleCardClick}/>
    ))

    return (<>{characterCards}</>)
}

export default CardsGrid;