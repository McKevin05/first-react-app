import React from 'react'

const Container = (props) => {
  return (
    <div className="container flex mx-auto justify-center w-full px-4 py-8 flex-col">
        {props.children}
    </div>
  )
}

export default Container
