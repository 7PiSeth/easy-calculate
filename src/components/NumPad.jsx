import React from "react";
// import { BiLeftArrow, BiSolidLeftArrowSquare } from "react-icons/bi";
import { BsFillBackspaceFill, BsBackspace } from "react-icons/bs";

function handleClick(clickValue) {
  var op1 = document.getElementById("op1");
  var op2 = document.getElementById("op2");
  switch (document.getElementById("catchFocus").innerHTML) {
    case "op2":
      if (isNotDoubleMathSymbol('op2', clickValue) && isCorrectInput('op2', clickValue) ) {
        op2.value += clickValue;
        calculate("op2", "op1")
      }
      break;
    default:
      if (isNotDoubleMathSymbol('op1', clickValue) && isCorrectInput('op1', clickValue) ) {
        op1.value += clickValue;
        calculate("op1", "op2")
      }
      break;
  }
}

const calculate = (operation, result) => {

  var inputOperation = document.getElementById(operation).value;
  if (inputOperation === '') {
    document.getElementById(result).value = '';
    return;
  }
  try {
    var calculatedValue = eval(inputOperation).toFixed(2);
    if (calculatedValue.substr(calculatedValue.length - 3, 3) === '.00') {
      calculatedValue = calculatedValue.substr(0, calculatedValue.length - 3);
    }
    document.getElementById(result).value = calculatedValue;
  } catch (error) {
    document.getElementById(result).value = "Input incorrect operation";
  }
}

function isNotDoubleMathSymbol(operation, inputValue) {
  var lastValueOfInput = document.getElementById(operation).value;
  if (lastValueOfInput.length > 0) {
    lastValueOfInput = lastValueOfInput.slice(lastValueOfInput.length - 1);
  }
  if (isMathSymbol(lastValueOfInput) && isMathSymbol(inputValue)) {
    return false;
  }

  if (isMathSymbol(inputValue) && lastValueOfInput === '' ) {
    return false;
  }
  
  return true;
}

function isMathSymbol(val) {
  if (val === "+" || val === "-" || val === "*" || val === "/" || val === "%")
    return true;
}


function isCorrectInput(operation, inputValue) {
  var lastValueOfInput = document.getElementById(operation).value;
  if (lastValueOfInput.length > 0) {
    lastValueOfInput = lastValueOfInput.slice(lastValueOfInput.length - 1);
  }
  if ( lastValueOfInput === '.' && ( inputValue === '(' || inputValue === ')' || inputValue === '.' ) ) {
    return false;
  }

  if ( inputValue === '.'  && lastValueOfInput === '' ) {
    return false;
  }

  if ( isMathSymbol(lastValueOfInput) && (inputValue ==='.' || inputValue ===')') ) {
    return false;
  }

  if ( lastValueOfInput==='.' && isMathSymbol(inputValue) ) {
    return false;
  }

  if ( !isMathSymbol(lastValueOfInput) && inputValue ==='(' ) {
    return false;
  }
  
  return true;
}



const NumPad = () => {
  return (
    <div className="mt-6">
      <table className="num-pad rounded-md dark:bg-[#282C34] bg-[rgb(244,246,248)]">
        <tr>
          <td onClick={() => {
            var op1 = document.getElementById("op1");
            var op2 = document.getElementById("op2");
            switch (document.getElementById("catchFocus").innerHTML) {
              case "op2":
                op2.value = op2.value.replace(/.$/, '')
                break;
              default:
                op1.value = op1.value.replace(/.$/, '')
                break;
            }
          }}>
            <BsBackspace />
          </td>
          <td
            onClick={() => {
              document.getElementById("op1").value = "";
              document.getElementById("op2").value = "";
            }}>C</td>
          <td onClick={() => {
            handleClick('%')
          }}>%</td>
          <td onClick={() => {
            handleClick('/')
          }}>/</td>
        </tr>
        <tr>
          <td onClick={() => {
            handleClick('7')
          }}>7</td>
          <td onClick={() => {
            handleClick('8')
          }}>8</td>
          <td onClick={() => {
            handleClick('9')
          }}>9</td>
          <td onClick={() => {
            handleClick('*')
          }}>*</td>
        </tr>
        <tr>
          <td onClick={() => {
            handleClick('4')
          }}>4</td>
          <td onClick={() => {
            handleClick('5')
          }}>5</td>
          <td onClick={() => {
            handleClick('6')
          }}>6</td>
          <td onClick={() => {
            handleClick('-')
          }}>-</td>
        </tr>
        <tr>
          <td onClick={() => {
            handleClick('1')
          }}>1</td>
          <td onClick={() => {
            handleClick('2')
          }}>2</td>
          <td onClick={() => {
            handleClick('3')
          }}>3</td>
          <td onClick={() => {
            handleClick('+')
          }}>+</td>
        </tr>
        <tr>
          <td onClick={() => {
            handleClick('0')
          }}>0</td>
          <td onClick={() => {
            handleClick('.')
          }}>.</td>

          <td onClick={() => {
            handleClick('(')
          }}
          >(</td>
          <td onClick={() => {
            handleClick(')')
          }}>)</td>
        </tr>
      </table>
    </div>
  );
};

export default NumPad;
