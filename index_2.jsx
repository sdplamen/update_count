import React, { useState,  } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ count, updateCount ] = useState(0);

 const handleClick = () => {
  updateCount(count + 1);
 }

 return (
  <div>
   <h1>Click Counter</h1>
   <p>I've been clicked {count} times.</p>
   <button onClick={handleClick}>+</button>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
