import React, { useState } from "react";
import './todo.css';
const Todo=()=>{
    const [item,setItem]=useState("");
const [list,setList]=useState([]);

    const getData=(event)=>{
        setItem(event.target.value)
    }
const SetData=()=>{
    setList((prev)=>{
        return [...prev,item]
    })
    setItem("")
}
const deleteItem=(index)=>{
    console.log("id"+index)
    setList((prevList)=>{
        return prevList.filter((data,i)=>{
             return i!==index
         })
     })
}
    return(
<div className="main-div">
<div className="innerDiv">
<br/>
    <h1 className="heading1">Todo List</h1>
<br/>
<input type="text" placeholder="Add a Items" value={item} onChange={getData}/>
<button onClick={SetData}>+</button>
<ul style={{listStyle:"none"}}>
    {list.map((data,index)=>{
        return (
            <div key={index} className="listDiv">
            <i className="fas fa-times" onClick={()=>{
                deleteItem(index)
            }}/>
            <li>{data}</li>
            </div>
        )
    })}

</ul>
</div>
</div>
    )
}
export default Todo;