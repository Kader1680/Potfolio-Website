import React from 'react'

import {Data} from "../../Data"
import Field from "./field"
export default function Project() {
  return (
    <div className=' '>
        <div  class="project row container">
                {
                  Data.map((item)=>{
                    return(
                      <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
                      <Field data ={item} />

</div>
                    )
                  })
                }
          </div>
    </div>
    
  )
}
