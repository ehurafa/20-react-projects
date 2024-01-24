import { useState, useEffect, useRef } from 'react'

import { marked } from "marked"
 
import Toolbar from "./components/Toolbar"

function App() {

  const [text, setText] = useState("# Olá, eu sou feito de markdown");

  const renderText = () => {
    return { __html: marked(text) };
  }

  const textAreaRef = useRef(null);

  return (
    <div className="app-container">
      <Toolbar />
      <textarea 
        ref={textAreaRef} 
        value={text} 
        onChange={ (e) => setText(e.target.value) }>
      </textarea>
      <div dangerouslySetInnerHTML={ renderText() }/>
    </div>
  )
}

export default App
