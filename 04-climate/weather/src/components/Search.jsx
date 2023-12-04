import React from 'react'

const Search = ({ city, setCity, searchWeather}) => {
  return (
    <div>
      <input
        type="text"
        value={ city }
        onChange={ (e) => setCity(e.target.value) }
        placeholder="Digite uma cidade..."
      />
      <button onClick={ searchWeather }>Buscar</button>
    </div>
  )
}

export default Search