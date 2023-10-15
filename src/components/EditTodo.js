import React, {useState} from 'react'
import { useForm } from "react-hook-form"

const EditTodo = ({editTodo, task}) => {
    const [updatedData,setUpdatedData] = useState(task)
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    const onSubmit = (e) => {
        editTodo(updatedData, task.id);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
    <input {...register("Title")} value={updatedData.title} onChange={(e) => setUpdatedData({...updatedData,title:e.target.value})} className="todo-input" placeholder='Update Title' />
    <input {...register("Completed")} value={updatedData.completed} onChange={(e) => setUpdatedData({...updatedData,completed:e.target.completed})} className="todo-input" placeholder='Update Status' />
    <button type="submit" className='Button'>Update Task</button>
  </form>
  )
}

export default EditTodo;