const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchTodos = async() =>{
    try {
    const response = (await fetch(BASE_URL)).json();
    return response;
    }catch(error){
        console.log(error)
    }
}

export default{
    fetchTodos
}