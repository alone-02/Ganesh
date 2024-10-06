import React from "react";
import Dropdown from "./Dropdown";
import Search from "./search";
import { useNavigate } from "react-router-dom";

function Heading() {
  const navigate = useNavigate();
  async function player() {
    navigate("/");
  }
  async function log(){
    navigate("/login")
  }

  return (
    <>
      <div className="heading">
        <div className="logo" onClick={() => player()}></div>
        <div className="youtubeText">
          <p>Ganesh Museum</p>
        </div>
        <div className="searchdiv">
          <Search />
        </div>
        <div className="loginheaddiv">
          <button className="login" onClick={log}>Login</button>
        </div>
        <div>
        <Dropdown />
        </div>
      </div>
    </>
  );
}

export default Heading;
