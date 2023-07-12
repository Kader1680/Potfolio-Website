import React from 'react'
import me  from "../../assests/me.png"
import  "./home.css"

export default function Home() {
  return (
    <div  class=" home container">
        
        <div className=''>
            <h1>Hi There,I'm Abdelkader <span>Ould Hennia</span></h1>
           
            <a class=" resume text-decoration-none text-black" href="https://drive.google.com/file/d/1KlBNLR2yty75Rw8goF-LJdtnm2ZPGydA/view?usp=drive_link" download>
                Resume
                <i class="ms-2 fa-solid fa-download"></i>
            </a>
            <div className='social '>
                  <a href="https://www.linkedin.com/in/abdelkader-ould-hennia/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/baghdad.ouldhennia.9" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                  <a href='https://github.com/Kader1680' target='_blank'><i class="fa-brands fa-github"></i></a>
                  <a href='https://github.com/Kader1680' target='_blank'><i class="fa-brands fa-twitter"></i></a>
                  <a href='https://github.com/Kader1680' target='_blank'><i class="fa-brands fa-dev"></i></a>
            </div>
        </div>
        <div className=''>
            <img src={me} />
        </div>
    </div>
  )
}