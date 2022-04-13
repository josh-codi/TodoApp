import './App.css';
import {useState, useEffect } from 'react'
import Som from './Som';
import Todos from './Todos';



function App() {
  const [allTodos, setAllTodos] = useState([])

  useEffect(()=>{
    if(localStorage.getItem('lists')){
      setAllTodos(JSON.parse(localStorage.getItem("lists")))
    }
  }, [])

  return (
    <div className="App container mt-5">
      <Som allTodos={allTodos} setAllTodos={setAllTodos}/><br/>
      <Todos allTodos={allTodos} setAllTodos={setAllTodos}/>      
    </div>
  );
}

export default App;
