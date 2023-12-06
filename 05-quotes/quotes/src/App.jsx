import Quote from "./components/Quote";

import quotes from "./data";

import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0)

  const nextQuote = () => {
    setIndex((current) => (current + 1) % quotes.length);
  }

  return (
    <div className="container mt-5"> 
      <p>{ quotes[index].text}</p>
      <button className="btn btn-success mt-2" onClick={nextQuote}>Próxima citação</button>
    </div>
  )
}

export default App
