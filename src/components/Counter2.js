import React, { Component } from 'react';

import css from './counter.module.css';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import Value from './Value';

export default class Counter2 extends React.Component {
  handleButtonClick = (type) => {
    console.log(type);
    this.props.onCount(type);
  };
  render() {
    const { countValue, currentStep } = this.props;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />

        <Value value={currentStep} />
      </div>
    );
  }
}
