import App from "components/App";
import Buttons from "./feedBackOptions";

export default function changeState(event) {
    const defBtn = event.currentTarget.textContent
    console.log(' click');
    console.log(defBtn);
    if (defBtn === 'Good') {
            this.setState(prevState => {
              console.log('prevState >>', prevState);
              return {
                good: prevState.good + 1,
              };
            });
          } else if (defBtn === 'Neutral') {
            this.setState(prevState => {
              console.log('prevState >>', prevState);
              return {
                neutral: prevState.neutral + 1,
              };
            });
          } else {
            this.setState(prevState => {
              console.log('prevState >>', prevState);
              return {
                bad: prevState.bad + 1,
              };
            });
          }
}