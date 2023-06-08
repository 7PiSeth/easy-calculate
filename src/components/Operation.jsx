import React from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa";
import { MdClear, MdOutlineContentCopy } from "react-icons/md";
import copy from 'copy-to-clipboard';

const calculate = (operation, result) => {

  var inputOperation = document.getElementById(operation).value;
  if (inputOperation === '') {
    document.getElementById(result).value = '';
    return;
  }
  try {
    var calculatedValue = eval(inputOperation);
    document.getElementById(result).value = calculatedValue.toFixed(2);
  } catch (error) {
    // intentionally blank
  }
}

function validateInputDoubleMathSymbol(event, operation) {
  var lastValueOfInput = document.getElementById(operation).value;
  lastValueOfInput = lastValueOfInput.at(lastValueOfInput.length - 1);

  if (isMathSymbol(lastValueOfInput) && isMathSymbol(event.key))
    event.preventDefault();

  if( isMathSymbol(event.key) && typeof lastValueOfInput === 'undefined' )
    event.preventDefault();
}

function isMathSymbol(val) {
  if (val === "+" || val === "-" || val === "*" || val === "/" || val === "%")
    return true;
}

function contentMathSymbol(opID) {
  var operation = document.getElementById(opID).value;
  if (operation.includes("+")
    || operation.includes("-")
    || operation.includes("*")
    || operation.includes("/")
    || operation.includes("%")) {
    return true;
  }
  return false;
}

var catchValueOfOP1 = '';
var catchValueOfOP2 = '';

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
            calculate("op1", "op2");
          }}
          onFocusCapture={() => {
            document.getElementById("catchFocus").innerHTML = "op1"
            var textArea = document.getElementById("history");
            var op1 = document.getElementById("op1");
            var op2 = document.getElementById("op2");

            if (contentMathSymbol('op2') && catchValueOfOP2 !== op2.value) {
              textArea.value += "\n" + op2.value + " = " + op1.value;
            }
            catchValueOfOP2 = op2.value;
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
            calculate("op2", "op1");
          }}
          onFocusCapture={() => {
            document.getElementById("catchFocus").innerHTML = "op2"
            var textArea = document.getElementById("history");
            var op1 = document.getElementById("op1");
            var op2 = document.getElementById("op2");

            if (contentMathSymbol('op1') && catchValueOfOP1 !== op1.value) {
              textArea.value += "\n" + op1.value + " = " + op2.value;
            }
            catchValueOfOP1 = op1.value;
          }}
        />
        <FaRegCopy
          size={20}
          className='transform duration-100 absolute right-5 top-[33%] cursor-pointer active:scale-125'
          onClick={() => {
            var value = document.getElementById("op2").value;
            if (value !== '') {
              copy(value);
              alert(value + " has been copy.")
            }
          }}
        />
      </div>
    </div>
  )
}

export default op1