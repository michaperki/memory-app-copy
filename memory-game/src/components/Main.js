import { useEffect, useState } from "react";
import CardsGrid from "./CardsGrid";
import Scoreboard from "./Scoreboard";
import { getCharacter } from "rickmortyapi";
import { shuffleArray } from "../utils";

const Main = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const loadCards = async ()=>{
            setCharacters(shuffleArray(await fetchCharacters(3)))
        }

        loadCards()
    }, [])

  const fetchCharacters = async (number) => {
    const characters = [];

    for (let i = 1; i <= number; i++) {
      const character = await getCharacter(i);
      const image = character.data.image;
      const name = character.data.name;
      const charObj = {name, image};

      characters.push(charObj)
    }
    return characters;
  };

  console.log(characters)

  return (
    <>
      <Scoreboard score={2} bestScore={3} />
      <CardsGrid characters={characters} />
    </>
  );
};

export default Main;
