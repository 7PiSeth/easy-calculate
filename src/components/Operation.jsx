import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa";
import { MdClear, MdOutlineContentCopy } from "react-icons/md";

const op1 = () => {
  return (
    <div className='max-md:order-first flex flex-col justify-around h-[140px] w-[500px] max-sm:w-screen text-lg p-2' >
      <div className='relative'>
        <input
          id="op1"
          autocomplete="off"
          placeholder="Input your operation here + () - * / % "
          onKeyPress={(event) => {
            if (!/[0-9 + --  * / % . ( )]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onKeyUp={() => {
            var op1 = document.getElementById("op1").value;
            if (op1 === '') {
              document.getElementById("op2").value = '';
              return;
            }
            try {
              var op2 = eval(op1);
              document.getElementById("op2").value = op2;
            } catch (error) {
              // left blank
            }
          }}
        />
        <TiDelete size={30}
          className='transform duration-100 absolute right-3 top-[20%] cursor-pointer active:scale-125'
          onClick={() => {
            document.getElementById("op1").value = '';
            document.getElementById("op2").value = '';
            document.getElementById("op1").focus();
          }}
        />
      </div>
      <div className='relative'>
        <input
          id="op2"
          autocomplete="off"
          placeholder="Input your operation here + () - * / % "
          onKeyPress={(event) => {
            if (!/[0-9 + --  * / % . ( )]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onKeyUp={() => {
            var op2 = document.getElementById("op2").value;
            if (op2 === '') {
              document.getElementById("op1").value = '';
              return;
            }
            try {
              var op1 = eval(op2);
              document.getElementById("op1").value = op1;
            } catch (error) {
              // left blank
            }
          }}
        />
        <FaRegCopy
        size={20}
          className='transform duration-100 absolute right-4 top-[30%] cursor-pointer active:scale-125'
        />
      </div>
    </div>
  )
}

export default op1