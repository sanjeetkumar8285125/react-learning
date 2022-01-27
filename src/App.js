import React from "react"
import Form1 from "./form/Form1";
import StateEg from "./study/StateEg";
import TimeChange from "./study/TimeChange";
import TimeChange1 from "./study/TimeChange1";
import Greeting from "./study/Greeting";
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Layout from "./form/Layout";
import Todo from "./Todo/Todo";

const App=()=>{
    return(
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
          <Route path="/greeting" element={<Greeting/>}></Route>  
          <Route path="/currentTime" element={<TimeChange/>}/>
          <Route path="/runningTime" element={<TimeChange1/>}/>
          <Route path="/stateEg" element={<StateEg/>}/>
          <Route path="/form" element={<Form1/>}/>
          <Route path="/todo" element={<Todo/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    )

}
export default App;