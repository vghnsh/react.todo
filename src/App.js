import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import {Button} from '@material-ui/core';
import ToDo from './ToDo.js';
import db from './firebase';





function App() {
 
  const [todo,setTodo]=useState([]);
  const[input,setInput]=useState('');
  const[un,setUn]=useState([]);

useEffect(()=>{
  db.collection('todo').orderBy("timestamp","desc").onSnapshot(snapshot=>{
    
    setTodo(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo,un:doc.data().un})))
  })
  
},[]);
useEffect(()=>{
  setUn(prompt('NAme:'));
},[]);
  const addTodo = (event)=>{
    event.preventDefault();
    
    db.collection('todo').add({
      todo: input,
      timestamp: new Date().toLocaleString(),
      un:un
       })
    setInput('');

  };

  return (
    <div className="App">
      
<form>
      <h1>This is Your Todo List</h1>
      <h3>Welecome: {un} </h3>
      <input value={input} onChange={event =>setInput(event.target.value)} ></input>
     
     <Button type={"submit"} disabled={!input} onClick={addTodo} variant="contained" color="primary">Add</Button>
    
      <ul>

      {todo.map(todo=>(
        <ToDo todo={todo}/>))}
      
      </ul>

     

      </form>
      </div>
  );
}


export default App;
