import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from './pages/Team';
import Partners from './pages/Partners';
import Sec from './pages/Sec';
import QTCapital from './pages/QTCapital';
// import Editorial from './pages/Editorial';
// import ImpactInvesting from './pages/impact_investing';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sec" element={<Sec />} />
          <Route path="/qtcapital" element={<QTCapital />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
