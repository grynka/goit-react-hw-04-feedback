import React, { useState } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions"
import Notification from "./notification/Notification";

export default function App() {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const onLeaveFeedback = fedback => {
  // eslint-disable-next-line default-case
  switch (fedback) {
    case "good": setGood(state => state +1)
    break

    case "neutral": setNeutral(state => state +1)
    break

    case "bad": setBad(state => state +1)
    break
  }
    }   

    const countTotalFeedback = () => {
      const total = good + neutral + bad
       return total
  
  }

  const countPositiveFeedbackPercentage = () => {
    return(good ? Math.round(((good/(good + neutral + bad))*100)) : 0 )
} 

return (
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />{' '}
    </Section>
    <Section title="Statistics">
      { (countTotalFeedback() === 0) ?
        <Notification message="There is no feedback" />
        :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />}
    </Section>
  </>
);

}
