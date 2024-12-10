import React from "react";
import { useState } from "react";
import UpdatedComponent from "./HOC.js";
function Person1({ money, handleIncreament }) {
  //   const [money, setMoney] = useState(10);
  //   const handleIncreament = () => {
  //     setMoney(money * 2);
  //   };
  return (
    <div>
      <h1>Jimmy has : {money}</h1>
      <button onClick={handleIncreament}>Increment</button>
    </div>
  );
}
export default UpdatedComponent(Person1);
/// passing the Person1 AS a prop for the UpdatedComponent
/// and add some logic and funcionality to it and return the new comp
// richperson = money(person)
/// a person with money is a rich key concept '
// here money is like a updated compo with some funcionality and it will return the new comp as rich person
