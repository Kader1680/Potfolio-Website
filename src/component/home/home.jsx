import React from 'react'
import met  from "../../assests/met.png"
import cv from "../../assests/Document.pdf"
import  "./home.css"

export default function Home() {
  return (
    <div  class=" home container">
        
        <div className=''>
            <h1>Hi There,I'm Abdelkader <span>Ould Hennia</span></h1>
           <h3>Front End Developer | Web Designer </h3>
           <p>I Am A Front-End Developer With 1 Year Commercial Experience, Author Of JS Foundations, And Graduate Of Internet Technology. I Create Successful Websites That Are Fast, Easy To Use, And Built With Best Practices </p>
           
            <a class=" resume text-decoration-none" href={cv} download  target='_blank'>
                Resume
                <i class="text-white ms-3 fa-solid fa-download"></i>
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
            <img src={met} />
        </div>
    </div>
  )
}