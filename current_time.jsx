import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Watch = () => {

 const [ time, setTime ] = useState(null);

 useEffect(()=>{
  let timeout = setTimeout(()=>{
   let d = new Date();
   setTime(d.toLocaleTimeString());
  },1000);
  return () => { 
   if(timeout) clearTimeout(timeout); 
  }
 },[time]);
 
 return (
  <div>
    <h1>Your current time:</h1>
    <p>{time}</p>
   </div>
 );
}

ReactDOM.render(
 <Watch />,
 document.getElementById("root")
);

export default Watch;
