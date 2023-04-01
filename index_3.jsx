import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ first, setFirst ] = useState("");
 const [ second, setSecond ] = useState("");
 const [ multiplication, setMultiplication ] = useState(null);

 useEffect( ()=>{
    if (multiplication == null) setMultiplication(first * second);
 });

 return (
  <div>
   <h1>Multiply</h1>
   <p>The answer is: {multiplication}!</p>
   <p>Numbers to multiply:</p>
   <input 
    type="number" 
    value={first} 
    onChange={(e)=>{
     setFirst(e.target.value)
     setMultiplication(null);
    }}
   />
   <input 
    type="number" 
    value={second} 
    onChange={(e)=>{
     setSecond(e.target.value)
     setMultiplication(null);
    }}
   />
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
