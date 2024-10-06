import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form method="post" action="./login">
        <div className="loginform">
          <h2>Log In</h2>
          <input
            className="username"
            placeholder="Enter Username"
            name="username"
          />
          <input
            className="password"
            placeholder="Enter Password"
            name="password"
          />
           <Link to="/signup" className="linksingup">Not have a Account ? Signup</Link>
          <input className="loginformbtn" type="submit" value="Log In" />
        </div>
      </form>
    </>
  );
}

export default Login;
