import React,{useEffect} from 'react'
import Todo from './Todo'

export default function Todos({allTodos, setAllTodos}) {
    
  return (
    <div className='todos container mb-4'>
        {allTodos.map((todo)=>{
            const {text, id} = todo;
            return(
                <Todo allTodos={allTodos} setAllTodos={setAllTodos} key={id} todo={todo} text={text} id={id}/>
            )
        })}
    </div>
  )
}
