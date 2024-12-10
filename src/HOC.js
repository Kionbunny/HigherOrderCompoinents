import React, { useState } from "react";
function UpdatedComponent(OrignalComponent) {
  /// react component as input to the HOC function
  /// this will return the comp with updated state and logic (setfunction)
  function NewComponent() {
    const [money, setMoney] = useState(10); /// added state
    const handleIncreament = () => {
      /// added logic
      setMoney(money * 2);
    };
    return (
      <OrignalComponent handleIncreament={handleIncreament} money={money} />
    );
  } /// a new comp with added state and logic
  //// in the orginal comp(Person1, Person2) we are passing the state and props
  /// these can  be recevied in other components (Person1 and Person2)
  return NewComponent;
}
export default UpdatedComponent;
