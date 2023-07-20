import React,{createContext,useState} from "react";
import Box from "./Box";
import Product from "./Product";

//Create Context
export const MyContext =createContext();
//Create a Provider component
export function MyProvider({children}) {
    const[name,setName]=useState('Ozvitha');
    const[greeting,setGreeting]=useState('Good Morning');

    // Define a function to update the greeting
    const updateGreeting =(newGreeting) =>{
        setGreeting(newGreeting);
    }
    return(
        <MyContext.Provider value={{name,greeting,setName,updateGreeting}}>
            {children}
        </MyContext.Provider>
    )
}


