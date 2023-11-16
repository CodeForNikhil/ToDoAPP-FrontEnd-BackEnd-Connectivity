
import '../ToDo-App-CSS/ToDoApp.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './ToDoLogoutComponent';
import FooterComponent from './ToDoFooterComponent';
import HeaderComponent from './ToDoHeaderComponent';
import ListTodosComponent from './ToDoListComponent';
import ErrorComponent from './ToDoErrorComponent';
import WelcomeComponent from './ToDoWelcomeComponent';
import LoginComponent from './ToDoLoginComponent';
import AuthProvider, { useAuth } from './AuthorizationContext';
import ToDoComponent from './ToDoAppComponent';

function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to="/" />
}


export default function ToDoApp(){
    return(
        <div className="ToDoApp">
        <AuthProvider>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='*' element={ <ErrorComponent /> }></Route>
                        
                        <Route path='/welcome/:username' element={ 
                            <AuthenticatedRoute>
                                <WelcomeComponent /> 
                            </AuthenticatedRoute>
                            }></Route>
                        
                        
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                            }>
                            </Route>

                            <Route path="/todo/:id" element={
                            <AuthenticatedRoute>
                                <ToDoComponent />
                            </AuthenticatedRoute>
                            }>
                            </Route>
                        
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                            }></Route>
                    </Routes>
                <FooterComponent /> 
            </BrowserRouter>
        </AuthProvider>
        </div>
    )
}
