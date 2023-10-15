import React,{useState,useEffect} from "react";
import API from "../network/API";
import TodoLayout from "./TodoLayout";
import EditTodo from "./EditTodo";

function ExistingTodo () {
    const [todos,setTodos] = useState([]);
    const getTodos = () =>{
        API.fetchTodos().then((json)=> setTodos(json));
    }

    useEffect(()=>{
        getTodos()
    },[])
    
    const editSelectedTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    
      const editTask = (task, id) => {
        console.log("ID:"+id,task)
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, ...task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    return(
        <div id="existing" className="TodoWrapper">
      <h1>All Things At One Place !</h1>
      {todos.map((todo) =>
      todo.isEditing ? (
        <EditTodo editTodo={editTask} task={todo} />
      ) : (
        (
          <TodoLayout
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editSelectedTodo={editSelectedTodo}
          />
        )
      )
    )}
    </div>
    )
}

export default ExistingTodo;