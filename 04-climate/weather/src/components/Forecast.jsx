import React from 'react'

const Forecast = ({ forecast: forecastList } ) => { 
  console.log('x ', forecastList)
  return (
    <div>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        { forecastList.map((forecast) => (
          <li key={ forecast.dt }>
          
            <img
              src={`http://openweathermap.org/img/wn/${ forecast.weather[0].icon}.png}` }
              alt={ forecast.weather[0].description }
            />
            { forecast.weather.temp } ºC - { forecast.weather[0].description }
          </li>
        ))}        
      </ul>
    </div>
  )
}

export default Forecast