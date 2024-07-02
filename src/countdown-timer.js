/*import React,{useState, useEffect} from 'react';
import'./App.css';

const App = () =>{
  const [countdown, setCountdown] = useState(60);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCountdown((prevCount)=>prevCount-1);
    },1000);

    return()=> clearInterval(interval);
  },[]);

  return(
    <div className="App">
      <div className="countdown-timer">
        {countdown}seconds
      </div>
    </div>
  );
}



export default App;*/

import React from 'react';
import CountdownTimer from 'react-countdown-timer'; 
const
CountdownTimerComponent = () => {
const eventDate = new Date('June 22, 2024 00:00:00');
const
countdownTimer = new CountdownTimer(eventDate, {
  format: 'HH:mm:ss',
  zeroPad: true,
  });

  return (
    <div>
      <h1>Event Countdown Timer</h1>
      <CountdownTimer
      timer={CountdownTimer}
            format={'HH:mm:ss'}
            zeroPad={true}
            onComplete={() => console.log('Event has started!')}
            />
    </div>
  );
} ;

export default CountdownTimerComponent;






