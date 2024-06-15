import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import React from "react";
import { boardDefault, generateWordSet } from "./utils/words";
import GameOver from "./components/GameOver";

export const AppContext = React.createContext(null);

export default function App() {
  const [board, setBoard] = React.useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = React.useState({
    attempt: 0,
    letterPosition: 0,
  });

  const [wordSet, setWordSet] = React.useState(new Set());
  const [disabledLetters, setDisabledLetters] = React.useState([]);
  const [gameOver, setGameOver] = React.useState({
    gameOver: false,
    guessedWord: false,
  });

  const [correctWord, setCorrectWord] = React.useState("");

  React.useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todayWord);
    });
  }, []);

  function onSelectLetter(keyValue) {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  }

  function onDeleteLetter() {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  }

  function onEnterLetter() {
    if (currentAttempt.letterPosition !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word Not Found!");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  }

  return (
    <div className="text-center bg-[#121212] w-screen text-white">
      <nav>
        <h1 className="h-[60px] w-full m-0 border-b-[1px] border-solid border-gray-100 grid place-items-center text-2xl">
          Wordle
        </h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDeleteLetter,
          onEnterLetter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="w-screen h-full pb-[50px] flex items-center flex-col pt-[50px]">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}
