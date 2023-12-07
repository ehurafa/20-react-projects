import React from 'react';

import Photo from "./Photo";

const PhotoList = ({ photos }) => {
  return ( 
    <div className="album">
        { photos.map((photo) => (
            <Photo key={ photo.id } info={ photo } />
        ))};
    </div>
  )
}

export default PhotoList