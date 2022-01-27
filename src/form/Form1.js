import React, { useState } from 'react';

const Form1 = () => {
    const [name,setName]=useState("");
    const [fullName,setFullName]=useState();
    const inputEvent=(e)=>{
    setName(e.target.value)
    console.log(e.target.value)
    }

    const onsubmit=(e)=>{
setFullName(name)
e.preventDefault();
    }
    return (
        <div>
            <form>
                <h1>Hello {fullName}</h1>
  <label>
    Name:
    <input type="text"
     name="name" 
     placeholder='Enter your Name'
     value={name}
     onChange={inputEvent}
     />
  </label>
<button onClick={onsubmit}>Click</button>
</form>
        </div>
    );
};

export default Form1;