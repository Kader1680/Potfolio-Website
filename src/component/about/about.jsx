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
import amaz from "../../assests/amazon.png"
import bootstrap from "../../assests/bootstrap.png"
import laravel from "../../assests/laravel.png"
import figma from "../../assests/figma.png"
import psd from "../../assests/psd.png"
import npm from "../../assests/npm.png"
import react from "../../assests/React.png"
export default function About() {
      return (
      <div class="about container">
          <div className='AboutMe '>
                    <div className='left '>

                         <img src= {img} />

                    </div>
                    <div className='right ms-md-3'>

                              
                         <h3>Front End Developer</h3>
                         <p>Born : 23-01-2000</p>
                         <p>Phone Number : +213549891600</p>
                         <p>Place : Realizane, Algeria</p>
                         <p>Email : ouldhenniabaghdad@gmail.com</p>
                         <p>Place : Realizane, Algeria</p>

                    </div>
          </div>
          <div  class="MySkill   container">
               <h4 className='text-center'> Skills & Abilities</h4>
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
                         <img src= {javascript} />

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
                         <img src= {Tailwind} />
                    </div>
                    <div>
                         <img src= {laravel} />
                    </div>
                    <div>
                         <img src= {psd} />
                    </div>
                    <div>
                         <img src= {figma} />
                    </div>
                    <div>
                         <img src= {react} />
                    </div>
                    <div>
                         <img src= {npm} />
                    </div>
               </div>
          </div>  

            
      </div>
      )
}
