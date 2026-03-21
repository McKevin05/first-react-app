import React from 'react'

const Card = (props) => {
  return (
    <div className={`border-2 border-gray-300 rounded-md p-4 w-full ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
