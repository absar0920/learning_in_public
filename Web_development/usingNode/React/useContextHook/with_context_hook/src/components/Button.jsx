import React from 'react'
import { useContext } from 'react'

import countContext from '../contexts/context'

const Button = () => {
    const value = useContext(countContext)

  return (
    <div>
      <button className="primaryButton" onClick={()=>{value.setCount(value.count + 1)}}>CLick Primary</button>
    </div>
  )
}

export default Button
