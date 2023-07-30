import React from 'react'
import "./field.css"
export default function Field(props) {
    const {title, img, link, source} = props.data

  return (
    <div className='feild '>
        <div className='square'>
            <img src = {img}/>
            <h3> {title}</h3>
            <a className=' text-decoration-none fw-bolder' href={link}><i class="fa-solid fa-link"></i></a>
            <a className='ms-4 text-decoration-none  fw-bolder' href={source}><i class="fa-solid fa-code"></i></a>
        </div>
    </div>
  )
}
