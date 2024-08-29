// import './App.css';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import SocialLinks from './components/SocialLinks';
// import About from './components/About';
// import Portafolio from './components/Portafolio';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Portafolio />
//       <Experience />
//       <Contact />
//       <SocialLinks />
//     </div>
//   );
// }

// export default App;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portafolio from "./components/Portafolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  // Alterna el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleDarkMode}
        style={{ position: "fixed", top: 10, right: 10 }}
        aria-label="Toggle Dark Mode"
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          size="2x"
          color={darkMode ? "yellow" : "black"}
        />
      </button>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Portafolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
