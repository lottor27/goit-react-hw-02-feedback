import React, {Component} from 'react';
import Buttons from './Feedback/feedBackOptions';

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

countTotalFeedback ()  {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    return total
  };

countPositiveFeedbackPercentage  () {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    if (total === 0) {
      return
    }
    const percentage = Math.round((this.state.good * 100) / total); 
    console.log(percentage);
    return percentage;
  };


  render() {
    return (
      <div>
        <ul>
          Statistics
          <li>Good {this.state.good}</li>
          <li>Neural {this.state.neutral}</li>
          <li>Bad {this.state.bad}</li>
          <li>Total {this.countTotalFeedback()}</li>
          <li>Positive feedback {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
        <Buttons/>
        </div>
    );
  }
}

