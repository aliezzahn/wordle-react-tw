import React from "react";
import Key from "./Key";
import { AppContext } from "../App";

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard() {
  const { onSelectLetter, onDeleteLetter, onEnterLetter, disabledLetters } =
    React.useContext(AppContext);
  const handleKeyboard = React.useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnterLetter();
      } else if (event.key === "Backspace") {
        onDeleteLetter();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });

        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });

        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [onDeleteLetter, onEnterLetter, onSelectLetter],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="w-[700px] h-[300px] mt-[60px]" onKeyDown={handleKeyboard}>
      <div className="flex-[33%] flex flex-row justify-center m-[5px]">
        {keys1.map((key, index) => {
          return (
            <Key
              keyValue={key}
              key={index}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="flex-[33%] flex flex-row justify-center m-[5px]">
        {keys2.map((key, index) => {
          return (
            <Key
              keyValue={key}
              key={index}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="flex-[33%] flex flex-row justify-center m-[5px]">
        <Key keyValue="ENTER" index="ENTER" bigKey={true} />
        {keys3.map((key, index) => {
          return (
            <Key
              keyValue={key}
              key={index}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
        <Key keyValue="DELETE" index="DELETE" bigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
