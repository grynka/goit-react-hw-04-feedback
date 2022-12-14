import { useState } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions"
import Notification from "./notification/Notification";



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
};

onLeaveFeedback = feedback => {
    setState(prevState => ({
    [feedback]: prevState[feedback] + 1,
    }))
      }   
    



countTotalFeedback = () => {
    const total = good + neutral + bad
     return total

}

countPositiveFeedbackPercentage = () => {
    return(good ? Math.round(((good/(good + neutral +bad))*100)) : 0 )
} 


  render() {
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

