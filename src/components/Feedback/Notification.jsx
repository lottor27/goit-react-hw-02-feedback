import React from "react";


function Notification({isActive, message}){
    if(!isActive){
        return( <h2>{message}</h2>)
    } 
    return
}

export default Notification