
import './App.css';

import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import About from './component/about/about';
import Project from './component/project/project';
import Contact from './component/contact/contact';
import Service from './component/service/service';
import NavBottom from './component/navbarBottom/NavBottom';
import Footer from './component/footer/footer';
function App() {
  return (

      <BrowserRouter>
          <div style={{ backgroundColor:"#20272f" }} class="app">
              <Navbar />
              <NavBottom />
              <Routes>
                      <Route path="/Potfolio-Website" element={<Home  />} />
                      <Route path="/Potfolio-Website/About" element={<About  />} />
                      <Route path="/Potfolio-Website/Project" element={<Project  />} />
                      <Route path="/Potfolio-Website/Services" element={<Service  />} />
                      <Route path="/Potfolio-Website/Contact" element={<Contact  />} />
              </Routes>
              {/* <Footer /> */}
          </div>
      </BrowserRouter>

  );
}

export default App;
