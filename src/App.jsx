import Topbar from './components/Topbar';
import Projects from './components/sections/Projects';
import About from './components/sections/About'
import './App.css';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="ContentContainer">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
