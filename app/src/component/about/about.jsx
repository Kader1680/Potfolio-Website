import React from 'react'
import img from "../../assests/img.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
export default function About() {
  return (
    <div class="about row">
          <div className='left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>

                <img src= {img} />
                <div class="about">
                <p className=' fw-bolder'>Name:</p> <span>Abdelkader Ould Hennia</span>
                <p className=' fw-bolder'>Birth Date</p> <span>23 January 2000</span>
                <p className=' fw-bolder'>Phone Number: </p> <span>+213549891600</span>
                <p className=' fw-bolder'>Gmail:</p> <span>oudlhenniabaghdad@gmail.com</span>
                <p className=' fw-bolder'>Address:</p> <span>Mazouna Rlizane Algeria</span>
                </div>
          </div>
          <div className='right col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <h3 className=' fw-bolder'>Who am I </h3>
                <p>Front End React Developer 2-year experienced who enjoys building everything with JavaScript.

                  In this duration, I have learned a lot of technologies, created many cool websites, collaborated with great developers and contributed to open source projects.

                  So I'm always seeking to have an opportunity that matches my skills, to make the best use of all what I have learned.</p>
                
          </div>
    </div>
  )
}
