import React from 'react'
import met  from "../../assests/met.png"
import cv from "../../assests/Document.pdf"
import  "./home.css"

export default function Home() {
  return (
       
           <div className='MyHome'>

              <div  class="home container-fluid">
                        
                        <div className=''>
                            <h1>Hi There,I'm <br></br> <span>Abdelkader Ould Hennia</span></h1>
                            <h3>Front End Developer | Web Designer </h3>
                            <p>Front-End Developer & Software Developer </p>
                          
                            <a class=" mt-3 resume text-decoration-none" href={cv} download  target='_blank'>
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

                        <img className='profil' src={met} />
              </div>
          </div>

  )
}