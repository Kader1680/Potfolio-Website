import React from 'react'
import './btn.css'
import { Link } from 'react-router-dom'
export default function NavBottom() {
  return (
    <div className='Navbootom'>
        
        

                    
            <div className='Item'>
                
                <Link to="/Potfolio-Website">
                        <i class="fa-solid fa-house"></i>
                        <span>Home</span>
                </Link>
                
            </div> 
            <div className='Item'>
                
                <Link to="/Potfolio-Website/About">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>About</span>
                 
                </Link>
            </div>
            <div className='Item'>
                <Link to="/Potfolio-Website/Project">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Project</span>
                </Link>
            </div>
            <div className='Item'>
                
                
                <Link to="/Potfolio-Website/Services">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Services</span>
                </Link>
            
            </div>
            <div className='Item'>
                
                <Link  to="/Potfolio-Website/Contact">
                        <i class="fa-solid fa-phone"></i>
                        <span>Contact</span>
                
                </Link>
                
            </div>

       
    </div>
  )
}
