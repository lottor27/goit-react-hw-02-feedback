import React from "react"


function Statistics ({good,neutral,bad,total, positivePercentage, isActive }) {

  if(!isActive){
    return
  }
  return(
 
    <ul>
      Statistics
      <li>Good {good}</li>
      <li>Neural {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive feedback {positivePercentage}%</li>
    </ul>)
  
  

}

export default Statistics