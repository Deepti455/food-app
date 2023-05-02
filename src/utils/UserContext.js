import { createContext } from "react";


const UserContext = createContext({
    user:{
        name: 'Dummy name',
        email: 'dummyname@gmail.com'
    }
})

export default UserContext;