







import React from "react";
import "./App.css";
import Login from "./login"
import Dashboard from "./dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;