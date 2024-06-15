import React from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    React.useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "bg-[#528d4e]" : almost ? "bg-[#b49f39]" : "bg-[#3a393c]");

  React.useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div
      className={`${letterState} flex-[33%] h-full border grid place-items-center text-3xl font-bold text-[white] m-[5px] border-solid border-[grey]`}
    >
      {letter}
    </div>
  );
}

export default Letter;
