import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const NewTodoLayout = ({task, deleteTodo, editSelectedTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.title}</p>
        <div>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.completed ? "Completed" : "Incompleted"}</p>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default NewTodoLayout;