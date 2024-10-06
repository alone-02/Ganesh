import React from "react";

function Signup() {
  return (
    <>
      <form method="post" action="./signup">
        <div className="signupform">
          <h2>Sign Up !</h2>
          <input
            className="username"
            placeholder="Enter Email Address"
            name="username"
          />

          <input
            className="password"
            placeholder="Enter Mobile No."
            name="password"
          />

          <input
            className="password"
            placeholder="Enter Password"
            name="password"
          />

          <input
            className="password"
            placeholder="Confirm Password"
            name="password"
          />

          <input className="loginformbtn" type="submit" value="Sign Up" />
        </div>
      </form>
    </>
  );
}

export default Signup;
