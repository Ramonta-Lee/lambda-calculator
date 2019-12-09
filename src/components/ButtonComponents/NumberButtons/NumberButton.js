import React from "react";
import { numbers } from "../../../data";

const NumberButton = ({numbs}) => {
  return (
    <div>
      <button>{numbs}</button>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;