import React, { useState } from 'react';

const TimeChange = () => {
    let time=new Date().toLocaleTimeString();
    let [currTime,setTime]=useState(time);
    const updateTime=()=>{
        time=new Date().toLocaleTimeString();
setTime(time)
    }
    return (
    
        <div>
            <h1>{currTime}</h1>
            <button  onClick={updateTime} >GetTime</button>
        </div>
    );
};

export default TimeChange;