import React from "react";
import { TiDelete } from "react-icons/ti";

const History = (props) => {
  return (
    <div className={`absolute right-0 top-[8%] h-[85vh] w-[30vw]
    max-xl:dropHistory duration-500
    ${props.showHistory?'max-xl:translate-y-[0vh] ':'max-xl:-translate-y-[100vh]'}`}>
      <TiDelete
        size={40}
        className="transform duration-100 absolute max-xl:right-7 
        max-xl:top-14 right-1 top-1 cursor-pointer active:scale-125"
        onClick={() => {
          document.getElementById("history").value = "Operation History";
        }}
      />
      <textarea
        disabled
        name=""
        id="history"
        className="rounded-2xl max-xl:rounded-none w-full h-full dark:text-white outline-none
        p-5 text-2xl max-xl:pt-[60px] bg-[rgb(244,246,248)] dark:bg-[#282C34]"
      >
        Operation History
      </textarea>
    </div>
  );
};

export default History;
