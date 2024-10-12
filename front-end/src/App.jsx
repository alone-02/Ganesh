import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { IdolProvider } from "./components/ContextApi/IdolContext.jsx";
import Heading from "./components/Navbar/heading.jsx";
import Content from "./components/Container/content.jsx";
import Sidebar from "./components/Functionalities/Sidebar.jsx";
//import Pagecontrol from "./components/Pagecontrol.jsx";
import Login from "./components/Signin/Login.jsx";
import Signup from "./components/Signin/Signup.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Idoldetails from "./components/Productfeature/Idoldetails.jsx";

import "./index.css";
//import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
//import Dashboard from "./components/dashboard/Dashboard";


function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname == "/login";
  const isSignup = location.pathname == "/signup";
  const isHome = location.pathname == "/";
  const signIn = isLogin || isSignup;

  const [ isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <IdolProvider>
      <div className="container">
        {!isHome? <Heading toggleSidebar = {toggleSidebar}/> : <Navbar/>}
        <div className="body">

        {!signIn && <Sidebar isSidebarOpen = {isSidebarOpen}/>}
          <div className="cards_container">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/explore" element={<Content />} />
              <Route path="/idoldetails" element={<Idoldetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
       <Footer/>
      </div>
    </IdolProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <IdolProvider>
        <AppContent />
      </IdolProvider>
    </BrowserRouter>
  );
}

export default App;


//{!signIn && <Sidebar />}