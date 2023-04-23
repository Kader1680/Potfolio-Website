
import "./navbar.css"
import {BrowserRouter, Link} from "react-router-dom";
function NavBar() {
  return (
    <BrowserRouter>
          <div class="nav">
                  <input type="checkbox" id="nav-check" />
                  <div class="nav-header">
                    <div class="nav-title">
                      JoGeek
                    </div>
                  </div>
                  <div class="nav-btn">
                    <label for="nav-check">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                  </div>
            
                  <div class="nav-links">
                      <Link to="/" >Home</Link>
                      <Link to="/About" >About</Link>
                      <Link to="/Project" >Project</Link>
                      <Link to="/Contact" >Contact</Link>
                  </div>
            </div>
    </BrowserRouter>
    

  );
}

export default NavBar;