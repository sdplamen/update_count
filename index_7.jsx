import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ currentTime, setCurrentTime ] = useState(0);

 useEffect(()=>{
  const timer = setInterval(()=>{
   let d = new Date();
   setCurrentTime(d.toLocaleTimeString())
  },100);

  return ()=>{
   clearInterval(timer);
  }
 },[]);

 return (
  <div className="centered">
   <h1>Your current time:</h1>
   <h3>{currentTime}</h3>
  </div>
 )

}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
