import React from 'react'
import "./field.css"
export default function Field(props) {
    const {title, img, link, source} = props.data

  return (
    <div className='feild '>
        <div className='square'>
            <img src = {img}/>
            <h3> {title}</h3>
            <a style={{ fontSize: "16px" }} target='blank' className=' text-decoration-none fw-bolder' href={link}><i class="fa-solid fa-globe "></i>Demo</a>
            <a style={{ fontSize: "16px" }} target='blank' className='ms-4 text-decoration-none  fw-bolder' href={source}><i class="fa-brands fa-github"></i>Script</a>
        </div>
    </div>
  )
}
