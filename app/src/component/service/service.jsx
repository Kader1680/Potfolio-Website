import ser1 from "../../assests/be-your-html-css-bootstrap-and-javascript-coder.jpg"
import ser2 from "../../assests/build-a-responsive-landing-page-in-20-hours.jpg"

import React from 'react'
import "./service.css"
export default function Service() {
    return (
    <div class="service row">
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser1} />
            <div class="details">
                <h2 class="fw-bolder fs-3">create Landing Page</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                <div class="langage">
                    
                    <span>Html</span>
                    <span>Css</span>
                    <span>Js</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div>
                <button>Select Order</button>
                <button className="cnt">Contact Me</button>
            </div>
        </div>
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser2} />
            <div class="details">
                <h2 class="fw-bolder fs-3">Front End Landing Page</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                <div class="langage">
                    <span>Html</span>
                    <span>Css</span>
                    <span>JS</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div>
                <button>Select Order</button>
                <button className="cnt">Contact Me</button>
            </div>
        </div> 
    </div>
    )
}
