import { useState, useEffect } from 'react';

import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import LapList from './LapList';

import "./Timer.css";

const Timer = () => {

    const [millisenconds, setMilliseconds] = useState(0);
    const [timeOn, setTimeOn] = useState(false);
    const [laps, setLaps] = useState([]);

    const formatTime = () => {
        const minutes = ("0" + Math.floor(millisenconds / 60000) % 60).slice(-2);
        const seconds = ("0" + Math.floor(millisenconds / 1000) % 60).slice(-2);
        const centiseconds = ("0" + Math.floor(millisenconds / 10) % 100).slice(-2);

        return `${ minutes }:${ seconds }:${ centiseconds }`
    } 

    const startTimer = (interval) => {
        return setInterval(() => {
            setMilliseconds(prevMilliseconds => prevMilliseconds + 10)
        }, 10);
    };

    const stopTimer = (interval) => {
        clearInterval(interval);
        return interval;
    }

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = startTimer(interval);
        } else {
            interval = stopTimer(interval);
        }

        return () => stopTimer(interval)
    }, [timeOn]);

  return (
    <div className="timer-container">
        <TimerDisplay time={ formatTime() } />
        <TimerControls 
            onStart={ ()=> setTimeOn(true) }
            onStop={ ()=> setTimeOn(false) }
        />
        <LapList />
    </div>

  )
}

export default Timer