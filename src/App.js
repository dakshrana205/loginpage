import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
