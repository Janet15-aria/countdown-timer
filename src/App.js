import React,{useState, useEffect} from 'react';
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



export default App;





