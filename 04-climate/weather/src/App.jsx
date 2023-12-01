import { useState, useEffect } from "react";
import axios from "axios";

import './App.css'
import Search from './components/Search'
import { CurrentWeather } from './components/CurrentWeather'
import Forecast from './components/Forecast';


import { Title } from "./AppStyles";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  return (
    <>
     <div>
      <Title>Condições Climáticas</Title>
      <Search />
      <CurrentWeather />
      <Forecast />
     </div>
    </>
  )
}

export default App
