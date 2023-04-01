import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [first, updateFirst] = useState(1);
 const [second, updateSecond] = useState(1);
 const [multiple, multiply] = useState(0);

 useEffect(() => {
  multiply(first * second);
 }, [first, second));

 return (
  <div>
   <h1>Multiplier Calculator</h1>
   <input
    type="number"
    value={first}
    onChange={(e) => {
     updateFirst(e.target.value);
    }}
    placeholder="The first number..."
   />
   <p>multiplied by:</p>
   <input
    type="number"
    value={second}
    onChange={(e) => {
     updateSecond(e.target.value);
    }}
    placeholder="The second number..."
   />
   <p>Equals:</p>
   <h3>{multiple}</h3>
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
