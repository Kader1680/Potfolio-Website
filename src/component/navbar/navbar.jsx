import { Link } from 'react-router-dom'

import './navbar.css'

import {React, useState} from 'react'

export default function Navbar() {

    const [HomePage, setHomePage] = useState(false);

    function Home() {
        alert('rrr')
    }
    return (

    <div>
        <nav class="navbar">

            <div onClick={Home} class="Title fw-bolder">

                <h1>Vector</h1>

            </div>

            <div class="Items">

                <input type="checkbox" id="check" />

                <label for="check" class="checkBtn">

                    <i class="fa fa-bars"></i>

                </label>

                <ul class="list">

                    
                    <li><Link  target="_parent" to="/Potfolio-Website">Home</Link></li> 
                    <li><Link target="_parent" to="/Potfolio-Website/About">About </Link></li>
                    <li><Link target="_parent" to="/Potfolio-Website/Project">Project</Link></li>
                    <li><Link target="_parent" to="/Potfolio-Website/Services">Services</Link></li>
                    <li><Link target="_parent" to="/Potfolio-Website/Contact">Contact</Link></li>

                </ul>

            </div>

        </nav>




    </div>


  )
}


