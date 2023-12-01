import './App.css'
import Search from './components/Search'
import { CurrentWeather } from './components/CurrentWeather'
import Forecast from './components/Forecast';

import { Title } from "./AppStyles";

function App() {

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
