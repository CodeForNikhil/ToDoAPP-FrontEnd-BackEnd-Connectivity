import { Link } from "react-router-dom";
import {  useAuth } from "./AuthorizationContext";

export default function HeaderComponent(){

    const authContext = useAuth()

    const isAuthenticated = authContext.isAuthenticated

    console.log(authContext)

    function logout(){
        authContext.logout()
    }

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="">To Do App</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Nikhil">Home
                            </Link></li>}
                           
                           {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todos">To do's
                            </Link></li>}
                            
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {!isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                        {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}                      
                        
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}
