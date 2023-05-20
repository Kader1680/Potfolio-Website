import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import React from 'react'

export default function Navbar() {
  

  return (

  <nav class="navbar">

        <div class="left">

            <h1>Portfolio</h1>

        </div>

        <div class="right">

            <input type="checkbox" id="check" />

            <label for="check" class="checkBtn">

                <i class="fa fa-bars"></i>

            </label>

            <ul class="list">

                <li><a href="#">Home</a></li>
                <li><a href="#">About </a></li>
                <li><a href="/Project">Project</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>

            </ul>

        </div>

    </nav>
  )
}


// const Navbar = () => {
  


// }

