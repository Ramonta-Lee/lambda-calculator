import React from "react";
import "../button.css"




const NumberButton = (props) => {
  const {numbs, setNumbDisp} = props;


  return (
    <div>
<button className="button num" onClick={()=> {
  setNumbDisp(numbs)
  console.log(numbs)
}} >{numbs}</button>
    </div>
  );

  {/* Display a button element rendering the data being passed down from the parent container on props */ }
};



export default NumberButton;