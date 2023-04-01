import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {

 const [ count, updateCount ] = useState(0);

 const handleClick = () => {
  updateCount(count + 1);
 }

 return (
  <div>
   <h1>I'm a functional component with an attitude!</h1>
   <p>You've clicked on the button {count} time(s).</p>
   <button onClick={handleClick}>Click me!</button>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
