import React from 'react'
import "./field.css"
export default function Field(props) {
    const {title, img, link, source} = props.data

  return (
    <div className='feild '>
        <div className='square'>
            <img src = {img}/>
            <h3> {title}</h3>
            <a className=' text-decoration-none fw-bolder' href={link}>link</a>
            <a className='ms-4 text-decoration-none  fw-bolder' href={source}>source code</a>
        </div>
    </div>
  )
}
