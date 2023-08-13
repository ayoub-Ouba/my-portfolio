import React,{ useState} from "react";
import App from "../../App";
export const MultiStepContext=React.createContext()
export default function Context(){
    const [op,setop]=useState(false)
    const [id_ved,setid_ved]=useState(0)
    return(<MultiStepContext.Provider value={{op,setop,id_ved,setid_ved}}>
        <App/>
    </MultiStepContext.Provider>

    )
}