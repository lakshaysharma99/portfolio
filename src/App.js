import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';

function App() {
  return (
    <div className="App">    
      <NavBar />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
