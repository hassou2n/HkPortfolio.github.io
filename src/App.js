/** @format */

import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { Footer } from "./components/Footer/Footer.component";
import { AboutMe } from "./components/AboutMe/AboutMe.component";
import { MyProjects } from "./components/MyProjects/MyProjects.component";
import { Resume } from "./components/Resume/Resume.component";
import { Contact } from "./components/Contact/Contact.component";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AboutMe />
        <MyProjects />
        <Resume />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
