import App from "components/App"
import changeState from './Feedback/onleavefeedback';

  const Buttons = (changeState) => {
    <div>
    <button type="button" onClick={changeState().bind(this)}>
            Good
          </button>
          <button type="button" onClick={changeState().bind(this)}>
            Neutral
          </button>
          <button type="button" onClick={changeState().bind(this)}>
            Bad
          </button>
          </div>
  }

  export default Buttons