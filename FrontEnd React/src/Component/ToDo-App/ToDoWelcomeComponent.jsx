
import { useParams,Link } from "react-router-dom"
import { useState } from "react"
import { RetrieveHelloWorldPathVariable } from "./ToDo-API/HelloWorldAPIService"
import { useAuth } from "./AuthorizationContext"

export default function WelcomeComponent(){
    const {username} = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorld(){
        console.log('called ')

        RetrieveHelloWorldPathVariable('Nikhil', authContext.token)
        .then((response) => SuccessfulResponse(response))
        .catch((error) => ErrorResponse(error))
        .finally(() => console.log('cleanup'))
    }

    function SuccessfulResponse(response){
        console.log(response)
        ////for normal hello-world
        // setMessage(response.data)
        
        //for hello-world-bean
        setMessage(response.data.message)
    }

    function ErrorResponse(error){
        console.log(error)
    }
    return(
        <div className="Welcome">
        <h1> Welcome {username} </h1>
        To manage your To Do's - <Link to='/todos'>Go here</Link>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorld}>Call Hello World</button>
        </div>
        <div className="text-info">{message}</div>
        </div>
    )
}

