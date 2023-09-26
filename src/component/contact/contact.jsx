import React from 'react'
import './contact.css'
import contact1 from "../../assests/contact1.png"
export default function Contact() {
  return (
    <div class="row contact container bg-white" >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <img src={contact1} />
        </div>
        <form class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " method='Post'>
            <div class="inputField">
                <i class="fa-solid fa-user"></i>
                <input placeholder='Name' />
            </div>
            <div class="inputField">
                <i class="fa-solid fa-envelope"></i>
                <input  placeholder='Email' />
            </div>
            <div class="inputField">
                <i class="fa-solid fa-phone"></i>
                <input  placeholder='Phone'/>
            </div>
            <div class="inputField">
                <i class="fa-solid fa-message"></i>
                <input  placeholder='Message'/>
            </div>
            <button>Submit Now</button>


        </form>
    </div>




  )
}
