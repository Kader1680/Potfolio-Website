import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar.jsx'
import Home from './component/home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/about/about';
import Project from './component/project/project';




function App() {
  return (
      <div >
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/About" element={<About  />} />
            <Route path="/Project" element={<Project  />} />
          </Routes>
        </Router>
        
      </div>
  );
}

export default App;
