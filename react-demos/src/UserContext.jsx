import { createContext } from "react";

const UserContext = createContext();

const UserProvider= ({children}) =>{
    const [user, setUser] = useState({name:"Raghul"})

    const updateUser = (newName) =>{
        setUser({name: newUpdate})
    }

    return <UserContext.Provider value={{user,updateUser}}>
        {children}

    </UserContext.Provider>
}

export {UserContext, UserProvider};