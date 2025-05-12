// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLanding from "./pages/AppLanding";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLanding />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
