import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import Electrician from "./pages/Electrician";
import Plumber from "./pages/Plumber";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services1" element={<Electrician />} />
        <Route path="services2" element={<Plumber />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
