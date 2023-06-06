import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa";
import { MdClear, MdOutlineContentCopy } from "react-icons/md";

const calculate = (operation, result) => {

  var inputOperation = document.getElementById(operation).value;
  if (inputOperation === '') {
    document.getElementById(result).value = '';
    return;
  }
  try {
    var calculatedValue = eval(inputOperation);
    document.getElementById(result).value = calculatedValue;
  } catch (error) {
    // intentionally blank
  }
}

function validateInputDoubleMathSymbol(event, operation) {
    var lastValueOfInput = document.getElementById(operation).value;  
        lastValueOfInput = lastValueOfInput.at(lastValueOfInput.length-1);

    if( isMathSymbol(lastValueOfInput) && isMathSymbol(event.key)) 
    event.preventDefault();
}

function isMathSymbol( val ) {
  if( val === "+" || val === "-" || val === "*" || val === "/" || val ==="%")
  return true;
}

const op1 = () => {
  return (
    <div className='max-md:order-first flex flex-col justify-around h-[160px] w-[500px] max-sm:w-screen text-lg p-2' >
      <div className='relative'>
        <input
          id="op1"
          autocomplete="off"
          placeholder="Input your operation here.."
          onKeyPress={(event) => {
            if (!/[0-9 + --  * / % . ( )]/.test(event.key)) {
              event.preventDefault();
            }
            validateInputDoubleMathSymbol(event, "op1");
          }}
          onKeyUp={() => { 
            calculate( "op1", "op2");
          }}
          onFocusCapture={()=>{
            document.getElementById("catchFocus").innerHTML = "op1"
          }}
        />
        <TiDelete size={30}
          className='transform duration-100 absolute right-4 top-[25%] cursor-pointer active:scale-125'
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
          placeholder="Input your operation here.. "
          onKeyPress={(event) => {
            if (!/[0-9 + --  * / % . ( )]/.test(event.key)) {
              event.preventDefault();
            }
            validateInputDoubleMathSymbol(event, "op2");
          }}
          onKeyUp={() => {
            calculate( "op2", "op1");
          }}
          onFocusCapture={()=>{
            document.getElementById("catchFocus").innerHTML = "op2"
          }}
        />
        <FaRegCopy
        size={20}
          className='transform duration-100 absolute right-5 top-[33%] cursor-pointer active:scale-125'
        />
      </div>
    </div>
  )
}

export default op1