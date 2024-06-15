import React from "react";
import { AppContext } from "../App";

function Key({ keyValue, bigKey, disabled }) {
  const { onSelectLetter, onDeleteLetter, onEnterLetter } =
    React.useContext(AppContext);

  function selectLetter() {
    if (keyValue === "ENTER") {
      onEnterLetter();
    } else if (keyValue === "DELETE") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyValue);
    }
  }

  return (
    <div
      className={`${bigKey ? "w-[100px]" : disabled ? "bg-[#3a393c] w-[50px]" : "w-[50px]"} h-[70px] rounded grid place-items-center text-xl bg-[grey] text-[white] cursor-pointer m-[5px]`}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
}

export default Key;
