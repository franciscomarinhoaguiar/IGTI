import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Hello world" />

        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
