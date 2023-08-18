import { Link } from 'react-router-dom'

import './navbar.css'

import {React, useState} from 'react'

export default function Navbar() {

    const [HomePage, setHomePage] = useState(false);

    function Home() {
        setHomePage('')
    }
    return (

    <div className='container'>
        <nav  class="navbar ">

            <div onClick={Home} class="Title fw-bolder">

                <h1><Link className='text-white text-decoration-none' to="/Potfolio-Website">Vector</Link></h1>

            </div>

    
            <div style={{ backgroundColor:"#20272f" }} class="Items text-white">

                <input type="checkbox" id="check" />

                <label for="check" class="checkBtn">

                    <i style={{ backgroundColor:"#20272f" }} class="fa fa-bars"></i>

                </label>

                <ul style={{ backgroundColor:"#20272f" }} class="list ">

                    
                    <li style={{ backgroundColor:"#20272f" }} ><Link  target="_parent" to="/Potfolio-Website">Home</Link></li> 
                    <li style={{ backgroundColor:"#20272f" }} ><Link target="_parent" to="/Potfolio-Website/About">About </Link></li>
                    <li style={{ backgroundColor: "#20272f" }}  ><Link target="_parent" to="/Potfolio-Website/Project">Project</Link></li>
                    <li style={{ backgroundColor: "#20272f" }}  ><Link target="_parent" to="/Potfolio-Website/Services">Services</Link></li>
                    <li style={{ backgroundColor: "#20272f" }}  ><Link target="_parent" to="/Potfolio-Website/Contact">Contact</Link></li>

                </ul>

            </div>

        </nav>




    </div>


  )
}


