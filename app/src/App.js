// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar.jsx'
import Home from './component/home/home';
import About from './component/about/about';
import Project from './component/project/project';
import Contact from './component/contact/contact';


function App() {
  return (

      <div class="app">
            <Navbar />
            <Router>
              <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/Potfolio-Website" element={<Home  />} />
                <Route path="/Potfolio-Website/About" element={<About  />} />
                <Route path="/Project" element={<Project  />} />
                <Route path="/Contact" element={<Contact  />} />
              </Routes>
            </Router>
      </div>

  );
}

export default App;
