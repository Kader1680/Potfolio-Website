
import './App.css';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import About from './component/about/about';
import Project from './component/project/project';
import Contact from './component/contact/contact';
import Service from './component/service/service';
function App() {
  return (

      <BrowserRouter>
          <div class="app">
              <Navbar />
              <Routes>
                      <Route path="/Potfolio-Website" element={<Home  />} />
                      <Route path="/Potfolio-Website/About" element={<About  />} />
                      <Route path="/Potfolio-Website/Project" element={<Project  />} />
                      <Route path="/Potfolio-Website/Services" element={<Service  />} />
                      <Route path="/Potfolio-Website/Contact" element={<Contact  />} />
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
