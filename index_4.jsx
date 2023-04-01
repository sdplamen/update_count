import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ count, setCount ] = useState(1);
 
 useEffect(()=>{
  if (count % 3 == 0) setCount(count+1);
 });

 return (
  <div>
   <h1>Number Counter</h1>
   <p>Counts: {count}</p>
   <button onClick={()=>{setCount(count+1)}}>+</button>
  </div>
 )
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
