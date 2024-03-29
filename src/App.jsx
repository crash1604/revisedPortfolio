import Topbar from './components/Topbar';
import NavBar from './components/Navbar';
import About from './components/sections/About'
import './App.css';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="wrapper">
        <About />
      </div>
    </div>
  );
}

export default App;
