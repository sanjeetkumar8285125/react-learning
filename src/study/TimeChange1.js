import React, { useState } from 'react';

const TimeChange1 = () => {
let time=new Date().toLocaleTimeString();
let [currTime,setTime]=useState(time);
setInterval(()=>{
let t1=new Date().toLocaleTimeString(); 
setTime(t1)
},1000) 
    return (
        <div>
            <h1>{currTime}</h1>
        </div>
    );
};

export default TimeChange1;