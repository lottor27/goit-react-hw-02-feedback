
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = event => {
    const defBtn = event.currentTarget.textContent;
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
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    return total
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    const percentage = Math.round((this.state.good * 100) / total); 
    console.log(percentage);
    return percentage;
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.changeState}>
            Good
          </button>
          <button type="button" onClick={this.changeState}>
            Neutral
          </button>
          <button type="button" onClick={this.changeState}>
            Bad
          </button>
        </div>

        <ul>
          Statistics
          <li>Good {this.state.good}</li>
          <li>Neural {this.state.neutral}</li>
          <li>Bad {this.state.bad}</li>
          <li>Total {this.countTotalFeedback()}</li>
          <li>Positive feedback {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

// countTotalFeedback(); 
// countPositiveFeedbackPercentage();