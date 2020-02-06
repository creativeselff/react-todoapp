import React from 'react'
import './Todos.css'

const Todos = ({todos, deleteTodo}) => {
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id} >
        <span className="container valign-wrapper spanClass" >{todo.content}
          <i className="small material-icons iconGrid" onClick={() =>{
          deleteTodo(todo.id)
          }}>
          <a href="#">delete</a></i>
          </span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay! <b>Add some</b></p>
  )
  return (
  <div className="todos collection">
{todoList}
   </div>
  )
}

export default Todos