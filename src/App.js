import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Counter2 from './components/Counter2';

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentCounter: 0, steps: 0 };
  }

  handleCount = (type) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div>
        <Header headerText="Hello world" />

        <Counter />
        <Counter />
        <Counter />

        <Header headerText="Hello world 2" />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
      </div>
    );
  }
}
