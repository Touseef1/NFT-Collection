







import React from "react";
import "./App.css";
import Login from "./login"
import Dashboard from "./dashboard"
import LandingPage from "./landingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/Page" element={<LandingPage/>} />


          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;