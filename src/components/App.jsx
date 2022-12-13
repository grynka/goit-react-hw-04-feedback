import React, {Component} from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions"
import Notification from "./notification/Notification";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}


onLeaveFeedback = fedback => {
    this.setState(prevState => ({
    [fedback]: prevState[fedback] + 1,
    }))
      }   
    



countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad
     return total

}

countPositiveFeedbackPercentage = () => {
    return(this.state.good ? Math.round(((this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100)) : 0 )
} 


  render() {
  const { good, neutral, bad } = this.state;
return (
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.onLeaveFeedback}
      />{' '}
    </Section>
    <Section title="Statistics">
      { (this.countTotalFeedback() === 0) ?
        <Notification message="There is no feedback" />
        :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
    </Section>
  </>
);
}
}
