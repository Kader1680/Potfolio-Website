import React from 'react'
import img from "../../assests/img.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
import html from "../../assests/html.png"
import cc3 from "../../assests/css3.png"
import heroku from "../../assests/heroku.png"
import firebase from "../../assests/firebase.png"
import git from "../../assests/git.png"
import github from "../../assests/github.png"
import c from "../../assests/c.png"
import jquery from "../../assests/jquery.png"
import sass from "../../assests/sass.png"
import Tailwind from "../../assests/Tailwind.png"
import php from "../../assests/php.png"
import javascript from "../../assests/javascript.png"
import mysql from "../../assests/mysql.png"
import amaz from "../../assests/mysql.png"
import bootstrap from "../../assests/bootstrap.png"
export default function About() {
      return (
      <div class="about row">
            <div className='left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>

                  <img src= {img} />
                  
            </div>
            <div className='right col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                  
                  <div class="DataPersonel">
                        <h3>I'm  <span>Abdelkader Ould Hennia</span></h3>
                        <h3>Full Stack Developer</h3>
                        <p>I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                        <p>Email : jigarsable21@gmail.com</p>
                        <p>Place : Pune, India - 412206</p>
                  </div>

            </div>
            <h4 className=' text-center'> Skills & Abilities</h4>
            <div className='skill text-center'>

                  <div>
                        <img src= {html} />
                  </div>

                  <div>
                       <img src= {cc3} />

                  </div>
                  <div>
                       <img src= {php} />

                  </div>
                  <div>
                       <img src= {c} />

                  </div>
                  <div>
                       <img src= {sass} />

                  </div>
                  <div>
                       <img src= {bootstrap} />

                  </div>
                  <div>
                       <img src= {mysql} />

                  </div>
                  <div>
                       <img src= {bootstrap} />

                  </div>
                  <div>
                       <img src= {jquery} />

                  </div>

                  <div>
                       <img src= {heroku} />

                  </div>

                  <div>
                       <img src= {git} />

                  </div>

                  <div>
                       <img src= {github} />

                  </div>
                  <div>
                       <img src= {amaz} />

                  </div>
                  <div>
                       <img src= {firebase} />

                  </div> 
                  <div>
                       <img src= {bootstrap} />
                  </div>
            </div>

            
      </div>
      )
}
