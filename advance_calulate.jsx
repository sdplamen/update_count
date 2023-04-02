import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { GetSquare, GetSqrRoot, GetAbsVal } from "./helpers.js";

const AdvancedCalc = (props) => {
 const [ number, setNumber ] = useState("-1");
 const [ method, setMethod ] = useState("square");
 const [ solution, setSolution ] = useState(null);
 
 useEffect(() => {
  if (method == "square") setSolution(GetSquare(number));
  else if (method == "square_root") setSolution(GetSqrRoot(number));
  else if (method == "absolute") setSolution(GetAbsVal(number));
  else setSolution("Method not available.");
 }, [number,method]);

 const handleNumber = (e) => { setNumber(e.target.value); }
 const handleMethod = (e) => { setMethod(e.target.value); }

 return (
  <div className="form">
   <h1>Advanced Calculator</h1>
   <div className="form_content">
    <p>Enter a number:</p>
    <input type="number" value={number} onChange={handleNumber} placeholder="ex. 4" />
    <p>Now select a method:</p>
    <select value={method} onChange={handleMethod}>
     <option value="square">Square</option>
     <option value="square_root">Square Root</option>
     <option value="absolute">Absolute Value</option>
    </select>
   </div>
   {
    (solution != null) &&
    <p><strong>{solution}</strong></p>
   }
  </div>
 );
}

ReactDOM.render(
 <AdvancedCalc />,
 document.getElementById("root")
);

export default AdvancedCalc;
