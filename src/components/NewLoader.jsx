import React from 'react'
import "./newloader.css"

const NewLoader = () => {
  return (
    <div>
        <div class="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <h2 className='tech'>Loading...</h2>
        </div>  
    </div>
  )
}

export default NewLoader