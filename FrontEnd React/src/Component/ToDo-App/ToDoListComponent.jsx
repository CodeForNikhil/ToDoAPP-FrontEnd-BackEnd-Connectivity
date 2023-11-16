import { useEffect, useState } from "react";
import { RetrieveTodosForUser,deleteTodoForUserById } from "./ToDo-API/ToDoApiService";
import { useAuth } from "./AuthorizationContext";
import { useNavigate } from "react-router-dom";


export default function ListTodosComponent(){

    const today = new Date();

    const authContext = useAuth()

    const username = authContext.username

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const[todos, setTodos] = useState([])

    const[message, setMessage] = useState(null)

    const navigate = useNavigate()

    // const todos =[  
    //     // {id:1, description: 'Learn AWS', done: false, targetDate:targetDate},
    //     // {id:2, description: 'Learn DevOps', done: false, targetDate:targetDate},
    //     // {id:3, description: 'Learn React', done: false, targetDate:targetDate},
    //     // {id:4, description: 'Learn SpringBoot', done: false, targetDate:targetDate}
    // ]

    useEffect( () => refreshTodos(),[] ) 

    function refreshTodos(){
        
        RetrieveTodosForUser(username)
        .then((response) => {
            setTodos(response.data)
        }
        )
        .catch((error) =>console.log(error))
    }

    function deleteTodo(id){
        deleteTodoForUserById(username, id)
        .then(
            () =>{
                setMessage(`Delete of To Do with ID: ${id} successful!`)
                refreshTodos()
            }
        )
        .catch((error) =>console.log(error))
    }

    function updateTodo(id){
        console.log("todo", id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        console.log("Added Todo")
        navigate(`/todo/-1`)
    }


    return(
        <div className='Container'>
            <h1> List of things you want to do!</h1>
            {message && <div className="alert alert-warning"> {message} </div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th> description</th>
                            <th> is done?</th>
                            <th> target date</th>
                            <th> Delete</th>
                            <th> Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                        todo =>(
                            <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            {/* <td>{todo.targetDate.toDateString()}</td> */}
                            <td>{todo.targetDate.toString()}</td>
                            <td> <button className="btn btn-warning"
                                    onClick={() => deleteTodo(todo.id)}> Delete</button> </td>
                            <td> <button className="btn btn-success"
                                    onClick={() => updateTodo(todo.id)} > Update</button></td>
                        </tr>
                        )
                    )}
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-success m-3" onClick={addNewTodo} > Add new To Do</button>
                </div>
            </div>
        </div>
    )
}
