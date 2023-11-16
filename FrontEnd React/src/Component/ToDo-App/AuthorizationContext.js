import {  createContext, useContext, useState } from "react";
import { apiClient } from "./ToDo-API/APIClient";
import { executeJwtAuthenticationService } from "./ToDo-API/AuthenticationAPIService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    // const [number,setNumber] = useState(0)

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval( () => setNumber(number+1) , 100000)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // function login(username,password){
    //     if(username==="Nikhil" && password==="Dummy"){
    //         setAuthenticated(true);
    //         setUsername(username)
    //         return true;
    //    }
    //    else{
    //     setAuthenticated(false);
    //     setUsername(null)
    //     return false
    //    }
    // }

    // async function login(username,password){

    //     const basicToken = 'Basic '+ window.btoa(username + ":" +password)
    //     // .then( response => console.log(response))
    //     // .catch(error => console.log(error))
        
    //     // setAuthenticated(false)
    //     try{
    //         const response = await executeBasicAuthenticationService(basicToken)

    //         if(response.status==200){
    //             setAuthenticated(true);
    //             setUsername(username)
    //             setToken(basicToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('interception')
    //                     config.headers.Authorization = basicToken
    //                     return config
    //                 }
    //             )
    //             return true;
    //         }
    //         else{
    //             logout()
    //             return false
    //         }
    //    } catch(error){
    //             logout()
    //             return false
    //    }
    // }

    async function login(username,password){

        try{
            const response = await executeJwtAuthenticationService(username,password)

            if(response.status==200){
                const jwtToken ='Bearer '+response.data.token
                setAuthenticated(true);
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('interception')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true;
            }
            else{
                logout()
                return false
            }
       } catch(error){
                logout()
                return false
       }
    }


    function logout(){
        setAuthenticated(false)
        setToken(null)
    }

    return(
       <AuthContext.Provider value={{isAuthenticated,  login, logout, username, token}}>
        {children}
       </AuthContext.Provider>
    )
}