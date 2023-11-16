import { apiClient } from './APIClient'

export function RetrieveHelloWorldBean(){
    return apiClient.get('hello-world-bean')
}

//Response to preflight request does not pass access control check after Authorization is sent across.
export function RetrieveHelloWorldPathVariable(username,token){
    return apiClient.get(`hello-world/path-variable/${username}`
    // ,{
    //     headers:{
    //         Authorization: token
    //     }
    // }
    )}

