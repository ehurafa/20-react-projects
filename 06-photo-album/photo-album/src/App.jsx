import { useState, useEffect } from "react";

import DetailedPhoto from './components/DetailedPhoto'
import PhotoList from './components/PhotoList'
import Searchbar from './components/Searchbar'

function App() {

  return (
    <div className="container">
      <Searchbar />
      <PhotoList />
      <DetailedPhoto />
    </div>
  )
}

export default App
