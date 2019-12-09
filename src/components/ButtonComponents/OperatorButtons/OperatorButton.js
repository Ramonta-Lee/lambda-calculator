import React from "react";

const OperatorButton = ({ops}) => {
  return (
    <>
    <div>
        <button>{ops}</button>
    </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
