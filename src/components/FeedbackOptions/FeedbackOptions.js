import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.btnWrapper}>
      <button
        className={s.btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className={s.btn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.btn}
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes ={
  onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;
