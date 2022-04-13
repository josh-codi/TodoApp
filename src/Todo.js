import React,{useEffect} from 'react'

export default function Todo({todo, setAllTodos, allTodos}) {
    
    
    const remove=()=>{
        setAllTodos(allTodos.filter(el=>{
            return el.id !== todo.id
        }))
        if(allTodos.length<2){
            localStorage.removeItem("lists")
        }
    }
    

  return (
    <div>
        <section className="container">
        <div className='todo ' >
            <li style={{border: '1px solid red',}}>{todo.text}</li>
            <div>
            <button>Completed</button>
            <button onClick={remove}>Delete</button>
            </div>
        </div>
        </section>
    </div>
  )
}
