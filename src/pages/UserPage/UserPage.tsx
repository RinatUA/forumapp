import { useUserContext } from "../../context/userContext"
import './ProfilePage.css'

export function UserPage(){
    const {user} = useUserContext()
    
    return (
        <div className="userPage">
            {
                user ? (
                    <div className="userInfo">
                        <h1>Username: {user.name}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                ) : (
                    <h1>no account?🥺</h1>
                )
            }
        </div>
    )
}