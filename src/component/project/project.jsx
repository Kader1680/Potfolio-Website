import React from 'react'
import "./project.css"

import {Data} from "../../Data"
import Field from "./field"
export default function Project() {
  return (
    <div className=' container'>
          <div  class="project row">
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
