/** @format */
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../src/css/animate.css";
import "../src/css/bootstrap.css";
import "../src/css/icomoon.css";
import "../src/css/style.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Work from "./Work/Work";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import GetStarted from "./GetStarted/GetStarted";
import Gototop from "./Gototop/Gototop";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div id="page">
      <div className="App">
        <Router>
          <Nav />
          <RouteList />
          <GetStarted />
          <Gototop />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default App;
