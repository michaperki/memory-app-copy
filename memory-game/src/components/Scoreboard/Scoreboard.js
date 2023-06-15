import React from "react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <>
      score: {score}, best score: {bestScore}
    </>
  );
};

export default Scoreboard;