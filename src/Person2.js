import React from "react";
import { useState } from "react";
import UpdatedComponent from "./HOC.js";
/// recevie money (state) and handleIncreament (logic) as props from the HOC comp
function Person2({ money, handleIncreament }) {
  //   const [money, setMoney] = useState(10);
  //   function handleIncreament() {
  //     setMoney(money * 2);
  //   }
  return (
    <div>
      <h1>bunny has : {money}</h1>
      <button onClick={handleIncreament}>Increment</button>
    </div>
  );
}
export default UpdatedComponent(Person2);
/// the problem with both comp is that
/// we are using the same logic and writing the same code
// for Rendering the UI
/// the above probelem can  be avoided by using HOC
/// the HOC take react comp as input and writtens
// new comp with some added functionality here state and logic
