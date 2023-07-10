//import ser1 from "../../assests/be-your-html-css-bootstrap-and-javascript-coder.jpg"
//import ser2 from "../../assests/build-a-responsive-landing-page-in-20-hours.jpg"
import ser3 from "../../assests/khamsat.png"
import ser4 from "../../assests/مستقل.png"
import ser1 from "../../assests/fiverr-og-logo.5fd6463.png"
import ser2 from "../../assests/fiverr-og-logo.5fd6463.png"

import React from 'react'
import "./service.css"
export default function Service() {
    return (
    <div class="container service row">
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser1} />
            <div class="details">
                <h2 class="fw-bolder ">Convert PSD & Figma into HTML CSS JS Template</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                {/* <div class="langage">
                    <span>Html</span>
                    <span>Css</span>
                    <span>JS</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div> */}
                <button className="cnt">
                    
                    <a class=" text-decoration-none" target="_blank" href="https://www.fiverr.com/ouldhenniaabdel/be-your-html-css-bootstrap-and-javascript-coder">Contact Me</a>
                </button>
            </div>
        </div>
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser2} />
            <div class="details">
                <h2 class="fw-bolder ">Front End Web Developer</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                {/* <div class="langage">
                    <span>Html</span>
                    <span>Css</span>
                    <span>JS</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div> */}
                <button className="cnt">
                    <a class=" text-decoration-none" target="_blank" href="https://www.fiverr.com/ouldhenniaabdel/build-a-responsive-landing-page-in-20-hours"> Contact Me</a>
                </button>
            </div>
        </div>
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser3} />
            <div class="details">
                <h2 class="fw-bolder ">Back End Php Developer</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                {/* <div class="langage">
                    <span>Html</span>
                    <span>Css</span>
                    <span>JS</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div> */}
                <button className="cnt">
                    <a class=" text-decoration-none" target="_blank" href="https://www.fiverr.com/ouldhenniaabdel/build-a-responsive-landing-page-in-20-hours"> Contact Me</a>
                </button>
            </div>
        </div>
        <div className='fild col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={ser4} />
            <div class="details">
                <h2 class="fw-bolder ">Front End Web Developer</h2>
                <p>i used figma to desing landing page and build using font end developement tools with responsive design  </p>
                {/* <div class="langage">
                    <span>Html</span>
                    <span>Css</span>
                    <span>JS</span>
                    <span>Bootstrap</span>
                    <span>Scss</span>
                    <span>ReactJs</span>
                    <span>Ui/Ux</span>
                </div> */}
                <button className="cnt">
                    <a class=" text-decoration-none" target="_blank" href="https://www.fiverr.com/ouldhenniaabdel/build-a-responsive-landing-page-in-20-hours"> Contact Me</a>
                </button>
            </div>
        </div>
    </div>
    )
}
