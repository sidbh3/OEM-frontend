import { createContext, useContext, useState } from "react";

export const NavContext = createContext(null);
export const useNavbar =()=>{
    const navbar = useContext(NavContext)
    return navbar
}

export const NavContextProvider=(props)=>{
    const [isopen,setIsopen]=useState(false);
    return(
        <NavContext.Provider value={{isopen,setIsopen}}>
            {props.children}
        </NavContext.Provider>
    )
}