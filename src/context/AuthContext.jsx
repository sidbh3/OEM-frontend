import { createContext, useContext, useState } from "react";

export const Authcontext =createContext(null);
export const useAuth =()=>{
    const auth=useContext(Authcontext)
    return auth
}

export const AuthContextProvider =(props)=>{
    const [auth,setAuth]=useState(true)
return(
    <Authcontext.Provider value={{auth,setAuth}}>
        {props.children}
    </Authcontext.Provider>
)
}