import Topbar from './components/Topbar';
import Projects from './components/sections/Projects';
import About from './components/sections/About'
import Professional from './components/Professional'
import './App.css';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="ContentContainer">
        <About />
        <Projects />
        <Professional />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
