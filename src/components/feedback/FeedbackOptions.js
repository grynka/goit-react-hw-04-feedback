import React from "react";
import { Button } from "./feedback.styled";
import PropTypes from 'prop-types';



const FeedbackOptions=({options, onLeaveFeedback}) => {
return options.map(option => 
            <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</Button>
            )
            
    }

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};