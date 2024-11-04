import { createContext, useEffect, useReducer } from "react";


export const AppContext = createContext();


const AppProvider =({children})=>{
        
    const authReducer = (state, action)=>{
        switch(action.type){
            case "LOGIN":
                return {...state, user:action.payload}
            case "LOGOUT":
                return {...state, user:null}
            default:
                return state
        }
    }
        
    const [state, dispatch] = useReducer(authReducer, {user:null})

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(user){
            dispatch({type:"LOGIN", payload:user})
        }
    
    }, [])

       
// dispatch({type:"Login})

    return(
        <AppContext.Provider value={{state, dispatch}} >
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider