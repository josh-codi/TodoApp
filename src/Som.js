import React, { useState, useEffect } from 'react'

export default function Som({setAllTodos, allTodos}) {
  const [text, setText] = useState('')
  const [arr, setArr] = useState([])

  const Change = (e)=>{
    setText(e.target.value)
  }

  useEffect(()=>{
    if(allTodos.length > 0){
      localStorage.setItem("lists", JSON.stringify(allTodos))
    }
  }, [allTodos])

  const Submit=(e)=>{
    e.preventDefault()
    if(text.length > 0){
      setAllTodos([
        ...allTodos, {text, id: new Date().getTime().toString()}
      ])
      
      setText('')

    }else{alert('Your input is too short ...')}
    

    
  }
  return (
    <form onSubmit={Submit}>
        <input onChange={Change} value={text}/>
        <button>Add +</button>
    </form>
  )
}
