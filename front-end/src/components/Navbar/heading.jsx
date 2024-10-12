import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Heading({ toggleSidebar }) {

  const navigate = useNavigate();

  const home = () => navigate("/");
  const log = () => navigate("/login");
  const signup = () => navigate("/signup");

  const cart = () => navigate("/cart");

  return (
    <nav className="navbar">
      <div>
        <MenuIcon onClick={toggleSidebar} style={{ display: "inline", margin: "0px 10px", fontSize: "30px", color:"white"}} />
      </div>
      <div className="navbar-logo" onClick={home}>
        <img src="Logo.webp" alt="Home Logo" className="h-10 w-auto" />
        <p>Shree Ganesh Museum</p>
      </div>

      <div className="navbar-search">
        <Search />
      </div>
      <ShoppingCartIcon onClick={cart} style={{ fontSize: "30px", margin: "0px,20px", color:"white"}} />
      <div className="navbar-buttons">
        <button className="navbar-btn" onClick={log}>Login</button>
        <button className="navbar-btn" onClick={signup}>Sign Up</button>
      </div>

      <div className="navbar-account">
        <Dropdown />
      </div>
    </nav>
  );
}

export default Heading;
