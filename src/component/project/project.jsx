import React from 'react'
import "./project.css"

import {Data} from "../../Data"
import Field from "./field"
export default function Project() {
  return (
    <div className=' container'>
          <div  class="project row">
          <h3 className='text-center m-3'>All My Project</h3>
          <div className='  d-flex align-items-center justify-content-center'>
            <ul className='position-relative d-flex'>
              <div className='new bg-danger text-white position-absolute'>New</div>

              <li className='list-unstyled bg-white text-black p-1  rounded-1'>html css</li>
              <li className='list-unstyled bg-white text-black p-1 ms-2 rounded-1'>JavaScript</li>
              <li className='list-unstyled bg-white text-black p-1 ms-2 rounded-1'>React JS</li>
              <li className='list-unstyled bg-white text-black p-1 ms-2 rounded-1 pointer'>Php & Mysql</li>
            </ul>
          </div>

                {
                  Data.map((item)=>{
                    return(
                      <div className='itemProject col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
                          <Field data ={item} />

                      </div>
                    )
                  })
                }
          </div>
    </div>
    
  )
}
