import React, { useState } from "react";
import { useForm } from "react-hook-form"
import TodoLayout from "./TodoLayout";
import { v4 as uuidv4 } from "uuid";
function CreateTodo ({addData}) {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([
          ...todos,
          { id:uuidv4(),title:todo.taskTitle, completed: false, isEditing: false,content:todo.content }
        ]);
      }
    const [data,setData] = useState({
        taskTitle:'',
        content:''
    })
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (e) => {

            addTodo(data)
            setData({...data,title:''})
            setData({...data,content:''})    
      }

    return(
        <div id="/create" className="TodoWrapper">
            <h1>Create A New Task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <input {...register("Content")} value={data.content} onChange={(e) => setData({...data,content:e.target.content})} className="TodoInput" placeholder='What is the task today?'/>
        <input {...register("TaskTitle")} value={data.taskTitle} onChange={(e) => setData({...data,taskTitle:e.target.value})} className="TodoInput" placeholder='Type your Task Title'/>
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit" className="Button">Add Task</button>
        </form>
        {todos.map((todo,index)=>
            (
            <TodoLayout
            key={index}
            task={todo}
          />
          )
        )}
        </div>
    )
}

export default CreateTodo;