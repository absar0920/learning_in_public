import React from 'react'

import Button from './Button'

import "./styles/component1.css"

const Component1 = (propsForComponent1) => {
  return (
    <div>
      <Button count={propsForComponent1.count} setCount={propsForComponent1.setCount} />
    </div>
  )
}

export default Component1
