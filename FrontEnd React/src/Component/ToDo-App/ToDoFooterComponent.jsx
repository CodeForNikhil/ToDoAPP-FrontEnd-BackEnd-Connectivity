import { useContext } from "react"
import { AuthContext } from "./AuthorizationContext"

export default function FooterComponent(){
    const authContext= useContext(AuthContext)

    console.log(`Footer component -> ${authContext.number}`)
    return (
        <footer className='footer'>
        <div className='Container'>
           Footer
        </div>
        </footer>
    )
}
