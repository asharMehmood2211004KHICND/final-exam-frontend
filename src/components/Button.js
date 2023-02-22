import React from 'react'

export const Button = ({text,buttonOnClick}) => {
  return (
    <div>
        <button onClick={buttonOnClick}>{text}</button>
    </div>
  )
}
