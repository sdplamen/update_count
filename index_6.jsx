import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [emailError, setEmailError] = useState(null);
 const [passwordError, setPasswordError] = useState(null);

 useEffect(() => {
  if (email.indexOf("@") == -1) setEmailError("Please provide an email");
  else setEmailError(null);
 });
 useEffect(() => {
  if (password.length < 5)
   setPasswordError(
    "Please provide a password longer than 5 characters at least"
   );
  else setPasswordError(null);
 });

 return (
  <div>
   <h1>Log In</h1>
   <input
    className="withError"
    type="email"
    value={email}
    onChange={(e) => {
     setEmail(e.target.value);
    }}
   />
   {emailError != null && <p className="error">{emailError}</p>}
   <input
    className="withError"
    type="password"
    value={password}
    onChange={(e) => {
     setPassword(e.target.value);
    }}
   />
   {passwordError != null && <p className="error">{passwordError}</p>}
  </div>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));
