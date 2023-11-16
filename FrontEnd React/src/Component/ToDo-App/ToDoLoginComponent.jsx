import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthorizationContext'



export default function LoginComponent(){

    const [username, setUsername]= useState("Nikhil")
    const [password, setPassword] = useState("Dummy")
    const [errorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth(); 

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    async function handleSubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
       }
       else{
        setErrorMessage(true)
       }
    }
    
    return(
        <div className="Login">
            {errorMessage && <div className='errorMessage'>Authentication Failed, Check your credenials</div>}
                <div className="LoginForm">
                    <div>
                        <label for className="username"> Username: </label>
                        <input type="text" className="username" name="username" value={username} onChange={handleUsernameChange}></input>
                    </div>
                    <div>
                        <label for className="password"> Password: </label>
                        <input type="password" className="password" name="password" value={password} onChange={handlePasswordChange}></input>
                    </div>
                    <div>
                        <button type="submit" name="login" onClick={handleSubmit}> Login </button>
                    </div>
            </div>
        </div>
    )
}
