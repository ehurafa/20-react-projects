import { useState } from 'react';
import './App.css';

import TimeZoneClock from './components/TimeZoneClock';

function App() {

  const timezones = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokio"
  ];

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedTimeZones, setSelectedTimeZones] = useState([localTimeZone]);
  console.log('localTimeZone ', selectedTimeZones)

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select>
        <option value="" disabled select>Selecione o fusu horário</option>
      </select>
      <div>
        { selectedTimeZones && selectedTimeZones.map((timezone) => (
          <TimeZoneClock key={timezone} timeZone={timezone} />
        ))}
      </div>
    </div>
  )
}

export default App
