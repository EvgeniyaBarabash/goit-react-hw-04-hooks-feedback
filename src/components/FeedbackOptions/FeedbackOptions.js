import React from 'react';
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
export default FeedbackOptions;
