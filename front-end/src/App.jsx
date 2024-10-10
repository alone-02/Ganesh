import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { IdolProvider } from "./components/IdolContext.jsx";
import Heading from "./components/heading.jsx";
import Content from "./components/content.jsx";
import Sidebar from "./components/Sidebar.jsx";
//import Pagecontrol from "./components/Pagecontrol.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Idoldetails from "./components/Idoldetails.jsx";

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname == "/login";
  const isSignup = location.pathname == "/signup";
  const signIn = isLogin || isSignup;
  return (
    <IdolProvider>
      <div className="container">
        <Heading />
        <div className="body">
          {!signIn && <Sidebar />}
          
          <div className="cards">
            <Routes>
              <Route exact path="/" element={<Content />} />
              <Route path="/Idoldetails" element={<Idoldetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>

      
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
