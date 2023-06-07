import React from 'react'
import { TiDelete } from 'react-icons/ti';

const History = () => {
    return (
        <div className='absolute right-0 top-[8%] max-2xl:hidden'>
            <TiDelete size={40}
                className='transform duration-100 absolute right-1 top-1 cursor-pointer active:scale-110'
                onClick={() => {
                    document.getElementById("history").value = 'Operation History';
                }}
            />
            <textarea disabled name="" id="history" cols="50"
                className='rounded-2xl bg-[rgb(244,246,248)] dark:bg-[#282C34] h-[85vh] outline-none
        p-5 text-2xl'
            >Operation History</textarea>
        </div>
    )
}

export default History