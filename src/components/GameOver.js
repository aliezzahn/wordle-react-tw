import React from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, correctWord, currentAttempt } =
    React.useContext(AppContext);
  return (
    <div className="w-[700px] h-[300px] mt-[60px]">
      <h3>{gameOver.guessedWord ? "You Correctly Guessed!" : "You Failed!"}</h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You Guessed in {currentAttempt.attempt} Attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
