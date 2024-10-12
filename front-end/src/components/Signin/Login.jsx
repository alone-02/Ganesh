import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function dataInput(event) {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function login(event) {
    event.preventDefault();
    console.log("Login");
    try {
      const response = axios.post("/api/login", loginData);
      console.log(response);
    }
    catch (err) {
      console.log("Error ", err);
    }
  }


  return (
    <>
      <form method="post" action="./login">
        <div className="loginform">
          <h2>Log In</h2>
          <input
            className="login_input"
            placeholder="Enter Username"
            required
            name="email"
            onChange={dataInput}
            value={loginData.email}
          />
          <input
            className="login_input"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={dataInput}
            value={loginData.password}
          />
          <Link to="/signup" className="linksingup">Not have a Account ? Signup</Link>
          <input className="loginformbtn" type="submit" value="Log In" onClick={login}/>
        </div>
      </form>
    </>
  );
}

export default Login;
