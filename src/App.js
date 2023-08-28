import React from 'react'
import Home from "./Components/Home/Home.js";
import Detail from "./Components/Details/Detail.js";
import Create from "./Components/Create/Create.js";
import Update from "./Components/Update/Update.js";
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';//For Routing Purpose(npm i react-router-dom)
import {createContext,useState,useEffect} from 'react';//React Hooks

export const store=createContext();//Creating Store


const App = () => {
  const [data,setData]=useState([]);
  const callme = () =>{
    //Getting data from JSONplaceholder using axios
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      arr=>{setData(arr.data)//storing API data to "data"
      console.log(arr.data )})
  }
useEffect(()=>{

callme();
console.log('todo-data:',data);

},[])
  return (
    <div>
      <store.Provider value={[data,setData]}>{/* data & setData can access globally(any component which is wrapped inside this stor can access this data)*/}
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>{/*Creating Routes */}
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
