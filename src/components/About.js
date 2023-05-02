import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

const About = ()=>{
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
        <h1>Hello.... This is about Us Page.</h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <input type='text' onChange={(e)=>setUser({
            ...user,
            name: e.target.value
        })}/>
        <Outlet/>
        </div>
    );
}

export default About;