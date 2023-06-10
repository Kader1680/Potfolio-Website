import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

import React from 'react'

export default function Navbar() {

  return (

  <nav class="navbar">

        <div class="Title">

            <h1>Portfolio</h1>

        </div>

        <div class="Items">

            <input type="checkbox" id="check" />

            <label for="check" class="checkBtn">

                <i class="fa fa-bars"></i>

            </label>

            <ul class="list">

                <li><a href="/Potfolio-Website">Home</a></li>
                <li><a href="/Potfolio-Website/About">About </a></li>
                <li><a href="/Potfolio-Website/Project">Project</a></li>
                <li><a href="/Potfolio-Website/Services">Services</a></li>
                <li><a href="/Potfolio-Website/Contact">Contact</a></li>

            </ul>

        </div>

    </nav>
  )
}

