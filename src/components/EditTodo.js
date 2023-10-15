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
    console.log(updatedData);
      editTodo(updatedData, task.id);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
    <input {...register("Title",{required:true})} value={updatedData.title} onChange={(e) => setUpdatedData({...updatedData,title:e.target.value})} className="todo-input" placeholder='Update Title' />
    {errors.Title && <span style={{color:'red',marginLeft:10,marginRight:10}}>Please Type Task</span>}
    <input {...register("Completed",{required:true})} value={updatedData.completed} onChange={(e) => setUpdatedData({...updatedData,completed:e.target.value})} className="todo-input" placeholder='Update Status' />
    {errors.Completed && <span style={{color:'red',marginLeft:10,marginRight:10}}>Please type Status</span>}
    <button type="submit" className='Button'>Update Task</button>
  </form>
  )
}

export default EditTodo;