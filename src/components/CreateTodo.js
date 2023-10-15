import React, { useState } from "react";
import { useForm } from "react-hook-form"
import displayIcon from "../assets/display.png"
import wishlistIcon from "../assets/wishlist.png"
import { v4 as uuidv4 } from "uuid";
import NewTodoLayout from "./NewTodoLayout";
function CreateTodo ({addData}) {
    const [todos, setTodos] = useState([]);
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const addTodo = (todo) => {
        setTodos([
          ...todos,
          { id:uuidv4(),title:todo.taskTitle, completed: false, isEditing: false,content:todo.content }
        ]);
      }
    const [data,setData] = useState({
        taskTitle:''
    })
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (e) => {

            addTodo(data)
            setData({...data,taskTitle:''})  
      }

    return(
      <div id="/create" style={{display:'flex'}}>
        <div>
        <img src={displayIcon} className='TodoIcon' style={{marginTop:20,width:500,height:500}}/>
        </div>
        <div className="TodoWrapper">
            <h1>Create A New Task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <input {...register("taskTitle", {required:true, maxLength:30})} value={data.taskTitle} onChange={(e) => setData({...data,taskTitle:e.target.value})} className="TodoInput" placeholder='What is your task today'/>
        {errors.taskTitle && <span style={{color:'red',marginLeft:10,marginRight:10}}>This field is required</span>}
        <button type="submit" className="Button">Add Task</button>
        </form>
        {todos.map((todo,index)=>
            (
            <NewTodoLayout
            key={index}
            task={todo}
            deleteTodo={deleteTodo}
          />
          )
        )}
        </div>
        <div>
        <img src={wishlistIcon} className='TodoIcon' style={{marginTop:20,width:500,height:500}}/>
        </div>
        </div>
    )
}

export default CreateTodo;