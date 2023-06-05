import React from "react";

function handleClick(val) {
  var op1 = document.getElementById("op1");
  var op2 = document.getElementById("op2");
  if (document.getElementById("catchFocus").innerHTML === 'op2') {
    if (isNotDoubleMathSymbol('op2', val)) {
      op2.value += val;
      calculate("op2", "op1")
    }
  } else {
    if (isNotDoubleMathSymbol('op1', val)) {
      op1.value += val;
      calculate("op1", "op2")
    }
  }
}

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

function isNotDoubleMathSymbol(operation, inputValue) {
  var lastValueOfInput = document.getElementById(operation).value;
  lastValueOfInput = lastValueOfInput.at(lastValueOfInput.length - 1);

  if (isMathSymbol(lastValueOfInput) && isMathSymbol(inputValue)) {
    return false;
  }
  return true;
}

function isMathSymbol(val) {
  if (val === "+" || val === "-" || val === "*" || val === "/" || val === "%")
    return true;
}

const NumPad = () => {
  return (
    <div className="mt-5">
      <table className="num-pad rounded-md dark:bg-[#282C34] bg-[rgb(244,246,248)]">
        <tr>
          <td onClick={() => {
            handleClick('(')
          }}
          >(</td>
          <td onClick={() => {
            handleClick(')')
          }}>)</td>
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
            handleClick('+')
          }}>+</td>
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
            handleClick('-')
          }}>-</td>
        </tr>
        <tr>
          <td onClick={() => {
            handleClick('0')
          }}>0</td>
          <td onClick={() => {
            handleClick('.')
          }}>.</td>
          <td colSpan={2}
            onClick={() => {
              document.getElementById("op1").value = "";
              document.getElementById("op2").value = "";
            }}>c</td>
        </tr>
      </table>
    </div>
  );
};

export default NumPad;
