import React from "react";
import {specials} from "../../../data";

const SpecialButton = ({spec}) => {
  return (
    <>
      <button>{spec}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
