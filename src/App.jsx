import Topbar from './components/header/Topbar';
import Projects from './components/sections/projects/Projects';
import About from './components/sections/about/About'
import Professional from './components/sections/professional/Professional'
import './App.css';
import Contact from './components/sections/contact/Contact';
import Footer from './components/footer/Footer';


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
