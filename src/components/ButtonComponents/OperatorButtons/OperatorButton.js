import React from "react";
import "../button.css"

const OperatorButton = (props) => {

  const { ops, setOpsDisp } = props;


  return (
    <div>
      <button className="button" onClick={() => {
        setOpsDisp(ops.value)
        // console.log(ops.value)
      }}>{ops.char}</button>
    </div>
  );
};

{/* Display a button element rendering the data being passed down from the parent container on props */ }

export default OperatorButton;
