import React from "react";
import { useState } from "react";
import axios from 'axios';

function Signup() {

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  function dataInput(event) {
    const { name, value } = event.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function signup(event) {
    event.preventDefault();
    console.log("SIgnUp");
    try {
      const response = axios.post("/api/signup", signUpData);

    }
    catch (err) {
      console.log("Error ", err);
    }
  }

  return (
    <>
      <form method="post" action="/login">
        <div className="signupform">
          <h2>Sign Up !</h2>

          <input
            type="text"
            className="input_singup"
            placeholder="Enter Name"
            name="name"
            required
            value={signUpData.name}
            onChange={dataInput}
          />

          <input
            className="input_singup"
            placeholder="Enter Email Address"
            name="email"
            value={signUpData.email}
            onChange={dataInput}
            required
          />

          <input
            className="input_singup"
            type="number"
            placeholder="Enter Mobile No."
            name="phone"
            value={signUpData.phone}
            onChange={dataInput}
          />

          <textarea
            id="address"
            name="address"
            rows={2}
            className="input_singup"
            placeholder="Enter Address"
            required
            value={signUpData.address}
            onChange={dataInput}
          ></textarea>


          <input
            className="input_singup"
            type="password"
            placeholder="Enter Password"

          />

          <input
            className="input_singup"
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={signUpData.password}
            onChange={dataInput}
          />
          <div className="loginbtndiv">
            <input className="Signupformbtn" id="signupCancelBtn" type="reset" value="Cancel" />
            <input className="Signupformbtn" type="submit" value="Sign Up" onClick={signup} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
