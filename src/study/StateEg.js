import React, { useState } from 'react';

const StateEg = () => {
  let [count,setCount]=useState(0);
const updateCount=()=>{
    setCount(count+1)
    //console.log("Clicked",count)
}
const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateColor=()=>{
    //   setCar({...car,color:"blue"})
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
  }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={updateCount}>Cick Me</button>
            <div>
            <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
            </div>
        </div>
    );
};

export default StateEg;