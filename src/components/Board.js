import React from "react";
import { boardDefault } from "../utils/words";
import Letter from "./Letter";

function Board() {
  const [board, setBoard] = React.useState(boardDefault);
  return (
    <div className="flex flex-col border-[1px] border-solid border-black h-[550px] w-[450px]">
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={0} />
        <Letter letterPosition={1} attemptValue={0} />
        <Letter letterPosition={2} attemptValue={0} />
        <Letter letterPosition={3} attemptValue={0} />
        <Letter letterPosition={4} attemptValue={0} />
      </div>
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={1} />
        <Letter letterPosition={1} attemptValue={1} />
        <Letter letterPosition={2} attemptValue={1} />
        <Letter letterPosition={3} attemptValue={1} />
        <Letter letterPosition={4} attemptValue={1} />
      </div>
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={2} />
        <Letter letterPosition={1} attemptValue={2} />
        <Letter letterPosition={2} attemptValue={2} />
        <Letter letterPosition={3} attemptValue={2} />
        <Letter letterPosition={4} attemptValue={2} />
      </div>
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={3} />
        <Letter letterPosition={1} attemptValue={3} />
        <Letter letterPosition={2} attemptValue={3} />
        <Letter letterPosition={3} attemptValue={3} />
        <Letter letterPosition={4} attemptValue={3} />
      </div>
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={4} />
        <Letter letterPosition={1} attemptValue={4} />
        <Letter letterPosition={2} attemptValue={4} />
        <Letter letterPosition={3} attemptValue={4} />
        <Letter letterPosition={4} attemptValue={4} />
      </div>
      <div className="flex-[33%] flex flex-row m-[5px]">
        <Letter letterPosition={0} attemptValue={5} />
        <Letter letterPosition={1} attemptValue={5} />
        <Letter letterPosition={2} attemptValue={5} />
        <Letter letterPosition={3} attemptValue={5} />
        <Letter letterPosition={4} attemptValue={5} />
      </div>
    </div>
  );
}

export default Board;
