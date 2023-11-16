import { apiClient } from "./APIClient"

export function RetrieveTodosForUser(username){
    return apiClient.get(`users/${username}/todo`)
}

export function deleteTodoForUserById(username,id){
    return apiClient.delete(`users/${username}/todo/${id}`)
}

export function retrieveSpecificTodoForUserById(username,id){
    return apiClient.get(`/users/${username}/todo/${id}`)
}

export function updateTodoDetails(username,id,todo){
    return apiClient.put(`users/${username}/todo/${id}`, todo)
}

export function createTodo(username,todo){
    return apiClient.post(`users/${username}/todo`, todo)
}