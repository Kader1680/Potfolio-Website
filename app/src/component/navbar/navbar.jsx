import { Link } from 'react-router-dom'

import './navbar.css'

import React from 'react'

export default function Navbar() {

    return (

    <nav class="navbar">

        <div class="Title">

            <h1>Portfolio</h1>

        </div>

        <div class="Items">

            <input type="checkbox" id="check" />

            <label for="check" class="checkBtn">

                <i class="fa fa-bars"></i>

            </label>

            <ul class="list">

                {/* <li><Link to = "/">Home</Link></li> */}
                
                <li><Link to="/Potfolio-Website">Home</Link></li> 
                <li><Link to="/Potfolio-Website/About">About </Link></li>
                <li><Link to="/Potfolio-Website/Project">Project</Link></li>
                <li><Link to="/Potfolio-Website/Services">Services</Link></li>
                <li><Link to="/Potfolio-Website/Contact">Contact</Link></li>

            </ul>

        </div>

    </nav>
  )
}


