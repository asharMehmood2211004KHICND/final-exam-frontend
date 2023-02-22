import React from 'react'

export const Image = ({imgLink,caption}) => {
  return (
    <>
    <img src={imgLink} alt={caption}/>
    </>
    
  )
}
