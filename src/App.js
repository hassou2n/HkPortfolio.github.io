import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { AboutMe } from "./components/AboutMe/AboutMe.component";
import { Resume } from "./components/Resume/Resume.component";
import { MyProjects } from "./components/MyProjects/MyProjects.component";
import { Contact } from "./components/Contact/Contact.component";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <RouteList />
      </Router>
    </div>
  );
}

const RouteList = () => {
  return (
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default App;
