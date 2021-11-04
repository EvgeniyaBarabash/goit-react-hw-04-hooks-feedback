import React from 'react';
import Notification from './Notification';
import Section from 'components/Section/Section';
const Statistics=({good,neutral,bad,total,positivePercentage})=> {
    return (
      <>
      {total===0 ? <Notification/> :
        (<Section title="Statistics">
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{positivePercentage}%</p>
        </Section>)}
      </>
    );
  }
export default Statistics;
