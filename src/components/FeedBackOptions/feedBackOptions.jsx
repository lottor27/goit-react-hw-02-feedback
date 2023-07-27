import React from "react"
import css from "./feedBackOptions.module.css"

  const FeedbackButtons = ({onleavefeedback}) => {
    return(
    <div>
      <button className={css.btn2} type="button"  onClick={onleavefeedback}>
              <samp>Good</samp>
            </button>
            <button className={css.btn2} type="button" onClick={onleavefeedback}>
              <samp>Neutral</samp>
            </button>
            <button className={css.btn2} type="button" onClick={onleavefeedback}>
              <samp>Bad</samp>
            </button>
            </div>
           )
    
  }

  export default FeedbackButtons