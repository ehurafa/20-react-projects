import React from 'react'

const Photo = ({ info }) => {
  return (
    <div className="photo">
      <img src={ info.urls.small } alt={ info.alt_description } />
    </div> 
  )
}

export default Photo