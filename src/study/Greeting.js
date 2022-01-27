import React from 'react';

const Greeting = () => {
    const currDate=new Date().toLocaleDateString();
    const currTime=new Date().toLocaleTimeString();

    //const d=new Date(2022 ,19 ,5, 13)
    const d=new Date()
    const hour=d.getHours();
    console.log(hour)
    let greeting=""
    const css={
    }
    if(hour>=1 && hour <=11){
    greeting="Good morning"
    css.color="green"
    }
    else if(hour>=12 && hour <=17){
      greeting="Good afternoon"
    css.color="orange"
    }
    else{
      greeting="Good night"
    css.color="black"
    }
return(
    <>
    <h1 >Helllo Sanjeet <span style={css}>{greeting}</span> </h1>
    {/* <StateEg/>
    <TimeChange/>
    <TimeChange1/>
    <Form1/> */}
    </>
)
};

export default Greeting;