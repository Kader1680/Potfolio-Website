import React from 'react'
import own  from "../../assests/own.png"
import  "./home.css"
export default function Home() {
  return (
    <div  class="row home">
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <img src={own} />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h1>AbdelKader Ould Hennia</h1>
            <p>Web Designer & Software Developer</p>
        </div>
        
    </div>
  )
}
