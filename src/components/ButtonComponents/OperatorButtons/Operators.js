import React from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton"


//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const {setOpsDisp} = props;
  
  return (
    <div className="operators-buttons" >
      {operators.map((ops, index) => (

        <OperatorButton ops={ops} key={index} setOpsDisp={setOpsDisp} />
      ))}
    
    </div>
  );
};

{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

export default Operators;
