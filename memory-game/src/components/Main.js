import CardsGrid from "./CardsGrid";
import Scoreboard from "./Scoreboard";

const Main = () => {
  const Rick = {
    name: "Rick",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png",
  };
  const Morty = {
    name: "Morty",
    image:
      "https://sketchok.com/images/articles/01-cartoons/007-rick-and-morty/07/11.jpg",
  };
  const characters = [Rick, Morty];

  return (
    <>
      <Scoreboard score={2} bestScore={3} />
      <CardsGrid characters={characters} />
    </>
  );
};

export default Main;
