import React from "react";
import "../button.css";

const SpecialButton = ({spec}) => {
  return (
    <div >
<button className= "button spec" >{spec}</button>
    </div>
      
  );
};


{/* Display a button element rendering the data being passed down from the parent container on props */ }

export default SpecialButton;
