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
      <div style={{ backgroundColor:"#20272f" }} class="about container text-white ">
          <div className='AboutMe '>
                    <div className='left '>

                         <img src= {img} />

                    </div>
                    <div className='right ms-md-3'>

                              
                         <h3>Front End Developer</h3>
                         <p>Born : 23-01-2000</p>
                         <p>Phone Number : +213549891600</p>
                         <p>Email : ouldhenniabaghdad@gmail.com</p>

                    </div>
          </div>
          <div  class="MySkill pb-5">
               <h4 className='text-center'> Skills & Abilities</h4>
               <section className='skill text-center'>

                    <div>
                         <img src= {html} />
                         <h4>HTML 5</h4>
                    </div>

                    <div>
                         <img src= {cc3} />
                         <h4>CSS 3</h4>
                    </div>
                    <div>
                         <img src= {php} />
                         <h4>PHP</h4>
                    </div>
                    <div>
                         <img src= {c} />
                         <h4>C++</h4>
                    </div>
                    <div>
                         <img src= {sass} />
                         <h4>SASS</h4>

                    </div>
                    <div>
                         <img src= {bootstrap} />
                         <h4>BOOTSTRAP</h4>

                    </div>
                    <div>
                         <img src= {mysql} />
                         <h4>MYSQL</h4>

                    </div>
                    <div>
                         <img src= {javascript} />
                         <h4>JAVASCRIPT</h4>

                    </div>
                    <div>
                         <img src= {jquery} />
                         <h4>JQUERY</h4>

                    </div>

                    <div>
                         <img src= {heroku} />
                         <h4>HEROKU</h4>

                    </div>

                    <div>
                         <img src= {git} />
                         <h4>GIT</h4>

                    </div>

                    <div>
                         <img src= {github} />
                         <h4>GUTHUB</h4>

                    </div>
                    <div>
                         <img src= {amaz} />
                         <h4>AWS</h4>

                    </div>
                    <div>
                         <img src= {firebase} />
                         <h4>FIREBASE</h4>

                    </div> 
                    <div>
                         <img src= {Tailwind} />
                         <h4>TAILWIND</h4>

                    </div>
                    <div>
                         <img src= {laravel} />
                         <h4>LARAVEL</h4>

                    </div>
                    <div>
                         <img src= {psd} />
                         <h4>PSD</h4>

                    </div>
                    <div>
                         <img src= {figma} />
                         <h4>FIGMA</h4>

                    </div>
                    <div>
                         <img src= {react} />
                         <h4>REACT JS</h4>

                    </div>
                    <div>
                         <img src= {npm} />
                         <h4>NPM</h4>

                    </div>
               </section>
          </div>  

            
      </div>
      )
}
