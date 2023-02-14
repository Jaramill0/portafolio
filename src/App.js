import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portafolio from './components/Portafolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
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
