import React from "react";

var operation = "";
var result = "";
function addValue() {
  for (let i = 0; i < document.getElementsByTagName('td').length; i++) {
    document.getElementsByTagName('td')[i].onclick = function () {
      if (document.getElementsByTagName('td')[i].textContent === 'c') {
        document.getElementById("op1").value = '';
        document.getElementById("op2").value = '';
        document.getElementById("op1").focus();
        return;
      } 
      operation = document.getElementById("op1").value+=document.getElementsByTagName('td')[i].textContent;
    }
  }
}

const NumPad = () => {
  return (
    <div className="mt-5">
      <table className="num-pad rounded-md dark:bg-[#0F202A] bg-[rgb(244,246,248)]"
        onClick={() => addValue()}>
        <tr>
          <td>(</td>
          <td>)</td>
          <td>%</td>
          <td>/</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>+</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>-</td>
        </tr>
        <tr>
          <td>0</td>
          <td>.</td>
          <td>c</td>
          <td>=</td>
        </tr>
      </table>
    </div>
  );
};

export default NumPad;
