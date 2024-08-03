import { useEffect, useState } from "react";

function StopWatch (){
const [Timer,setTimer] = useState(0);
const [isRunning,setisRunning] = useState(false);


const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
     
useEffect(()=>{
    let interval;
    if(isRunning)
        {
    interval=setInterval(()=>{
        setTimer((prev)=>prev+1);
    },1000)
}else{
    clearInterval(interval);
}

return (()=>{
    clearInterval(interval);
})
},[isRunning])

    return (
   <div >
        <h1>Stopwatch</h1>
        <h2>Time:{formatTime(Timer)}</h2>
        <button onClick={()=>{
            setisRunning((prev)=>!prev);
        }}>{isRunning?"Stop":"Start"}</button>
        <button onClick={()=>{
            setTimer(0);
            setisRunning(false);
        }}>Reset</button>
        
        </div>
    );
}

export default StopWatch;