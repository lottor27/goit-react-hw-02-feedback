import React from "react"

  const FeedbackButtons = ({onleavefeedback}) => {
    return(
    <div>
      <button type="button"  onClick={onleavefeedback}>
              Good 
            </button>
            <button type="button" onClick={onleavefeedback}>
              Neutral
            </button>
            <button type="button" onClick={onleavefeedback}>
              Bad
            </button>
            </div>
           )
    
  }

  export default FeedbackButtons