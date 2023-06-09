import React, { useState } from "react";
import { MdSpeakerNotes } from "react-icons/md";
import History from "./History";

const ShowHistory = () => {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div>
      <div className="z-20 absolute right-4 top-[15px] active:scale-110 duration-100">
        <button
          className="xl:hidden rounded-2xl px-5 py-[3px] 
      bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      onClick={()=>setShowHistory(!showHistory)}
        >
          <MdSpeakerNotes size={23} />
        </button>
      </div>
      <History showHistory={showHistory} />
    </div>
  );
};

export default ShowHistory;
