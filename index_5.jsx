import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [answer, setAnswer] = useState("very old-school");

 useEffect() => {  
  document.getElementById("answer").innerText = answer;
 });

 return (
  <div>
   <h1>Book Genres</h1>
   <p>Select the book genre that you like to read the most.</p>
   <select
    value={answer}
    onChange={(e) => {
     setAnswer(e.target.value);
    }}
   >
    <option value="very old-school">Classic</option>
    <option value="smartly written">Detective/Mystery</option>
    <option value="very magical">Fantasy</option>
    <option value="kinda scary">Horror</option>
    <option value="lovey-dovey">Romance</option>
    <option value="kinda geeky">Sci-Fi</option>
    <option value="very informative">Biography/Autobiography</option>
   </select>
   <p>
    Your favorite genre is apparently <span id="answer"></span>.
   </p>
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
