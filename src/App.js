//import logo from './logo.svg';
import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {

const[time, setTime]=useState(1);
// const[count, setCount]=useState(0);
// setCount(1);

const handleTime=()=>{
  let newTime;

  if(time>12){
    newTime=1;
  }else{
    newTime=time+1;
  }
  setTime(newTime);
  }

  const[users, setUsers]=useState([{id:0, name:"choi"}]);
 // const[users, setUsers]=useState([]);
  const downLoad=()=>{
    let sample=[
      {id:1, name:"kim"},
      {id:2, name:"lee"},
      {id:3, name:"park"}
    ]
    setUsers([users, ...sample])
  }


  return (
    <div>
      <p>current time is {time}.</p>
      <button onClick={handleTime}>ADD</button>
      <hr/> 
      {/* <p> current count is {count}</p> */}

      current users are {users.map(u=><h5>{u.id}, {u.name}</h5>)}
      <button onClick={downLoad}>download</button>

    </div>
  );
  }

export default App;


