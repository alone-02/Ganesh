import React from "react";

function Signup() {
  return (
    <>
      <form method="post" action="./signup">
        <div className="signupform">
          <h2>Sign Up !</h2>

          <input
            type="text"
            className="input_singup"
            placeholder="Enter Name"
            required
          />

          <input
            className="input_singup"
            placeholder="Enter Email Address"
            name="username"
            required
          />

          <textarea
            id="address"
            className="input_singup"
            placeholder="Enter Address"
            required
          ></textarea>

          <input
            className="input_singup"
            type="password"
            placeholder="Enter Mobile No."
            name="password"
          />

          <input
            className="input_singup"
            type="password"
            placeholder="Enter Password"
            name="password"
          />

          <input
            className="input_singup"
            placeholder="Confirm Password"
            name="password"
          />

          <input className="loginformbtn" type="submit" value="Sign Up" />
          <input className="loginformbtn" type="reset" value="Cancel" />
        </div>
      </form>
    </>
  );
}

export default Signup;
