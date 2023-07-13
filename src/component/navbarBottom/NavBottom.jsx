import React from 'react'
import './btn.css'
import { Link } from 'react-router-dom'
export default function NavBottom() {
  return (
    <div className='Navbootom'>
        
        <ul class="listBottom text-center">

                    
            <li>
                <i class="fa-solid fa-house"></i><br></br>
                <Link  target="_parent" to="/Potfolio-Website">Home</Link>
                
            </li> 
            <li>
                <i class="fa-solid fa-circle-info"></i><br></br>
                <Link target="_parent" to="/Potfolio-Website/About">About </Link>
            </li>
            <li>
                <i class="fa-solid fa-briefcase"></i><br></br>
                <Link target="_parent" to="/Potfolio-Website/Project">Project</Link>
            </li>
            <li>
                <i class="fa-solid fa-bag-shopping"></i><br></br>
                <Link target="_parent" to="/Potfolio-Website/Services">Services</Link>
            
            </li>
            <li>
                <i class="fa-solid fa-phone"></i><br></br>
                <Link target="_parent" to="/Potfolio-Website/Contact">Contact</Link>
                
            </li>

        </ul>
    </div>
  )
}
