import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/navbar.jsx'
import Home from './component/home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/about/about';
import Contact from './component/contact/contact';




function App() {
  return (
      <div >
        <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/About" element={<About  />} />
            <Route path="/Contact" element={<Contact  />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
