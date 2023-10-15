import React,{useState,useEffect} from "react";
import API from "../network/API";
import TodoLayout from "./TodoLayout";
import EditTodo from "./EditTodo";
import pencilIcon from "../assets/pencil.png"
import officeIcon from "../assets/office.png"
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
      <div id="existing" style={{flexDirection:"row",display:"flex"}}>
        <div>
        <p style={{fontSize:40,marginTop:100,marginLeft:0,marginRight:50}}>False->Behind Schedule !</p>
        <img src={pencilIcon} className='TodoIcon' style={{marginTop:20,width:500,height:500}}/>
        </div>
        <div className="TodoWrapper">    
      <h1 style={{alignSelf:"center"}}>All Things At One Place !</h1>
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
    <div>
        <p style={{fontSize:40,marginTop:100,marginLeft:50}}>True -> You are Upto Date !</p>
        <img src={officeIcon} className='TodoIcon' style={{marginTop:20,marginLeft:20,width:600,height:500}}/>
        </div>
    </div>
    )
}

export default ExistingTodo;