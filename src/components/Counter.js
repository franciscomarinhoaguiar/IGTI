import React, { Component } from 'react';

import css from './counter.module.css';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import Value from './Value';

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }

  handleButtonClick = (type) => {
    console.log(type);
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={currentCounter} />
        <IncrementButton onIncrement={this.handleButtonClick} />

        <Value value={steps} />
      </div>
    );
  }
}
