import React from "react";

const NumPad = () => {
  return (
    <div className="mt-5">
      <table className="num-pad rounded-md dark:bg-[rgb(17,20,27)] bg-[rgb(244,246,248)]">
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
