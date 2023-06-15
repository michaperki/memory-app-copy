import { useEffect, useState } from "react";
import styled from "styled-components";
import CardsGrid from "./CardsGrid";
import Scoreboard from "./Scoreboard";
import { getCharacter } from "rickmortyapi";
import { shuffleArray } from "../utils";


const Main = () => {
  const CHARACTER_NUM = 12;
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setCharacters(shuffleArray(await fetchCharacters(CHARACTER_NUM)));
    };

    loadCards();
  }, []);

  const fetchCharacters = async (number) => {
    const characters = [];

    for (let i = 1; i <= number; i++) {
      const character = await getCharacter(i);
      const { image, name } = character.data;
      characters.push({ name, image });
    }
    return characters;
  };

  const handleCardClick = (e) => {
    const characterName = e.target.parentNode.lastChild.textContent;
    playRound(characterName);
    setCharacters(shuffleArray(characters));
  };

  const playRound = (characterName) => {
    if (clickedCharacters.includes(characterName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setCurrentScore(newScore);
      setClickedCharacters((prevState) => [...prevState, characterName]);
    }
  };

  const resetGame = () => {
    setClickedCharacters([]);
    setCurrentScore(0);
  };

  return (
    <MainWrapper>
      <Scoreboard score={currentScore} bestScore={bestScore} />
      <CardsGrid characters={characters} handleCardClick={handleCardClick} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`;

export default Main;
