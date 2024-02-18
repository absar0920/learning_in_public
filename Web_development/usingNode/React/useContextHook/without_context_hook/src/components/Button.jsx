import React from 'react'

import "./styles/button.css"

const Button = (props) => {
  return (
    <div>
      <button className='secondary_Button' onClick={()=>{props.setCount(props.count+1)}}>Click ME</button>
    </div>
  )
}

export default Button
