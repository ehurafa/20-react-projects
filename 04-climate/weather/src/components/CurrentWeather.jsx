import React from 'react'

const CurrentWeather = ({ weather}) => {
  return (
    <div>
      <h3>{ weather.name }</h3>
      <img
        src={`http://openweathermap.org/img/wn/${ weather.weather[0].icon}.png}` }
        alt={ weather.weather[0].description }
      />
      <p>{ weather.weather.temp }ºC</p>
      <p>{ weather.weather[0].description }</p>
    </div>
  )
};

export default CurrentWeather;