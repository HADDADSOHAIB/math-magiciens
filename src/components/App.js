/* eslint-disable react/no-unused-state */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const current = this.state;
    this.setState(calculate(current, buttonName));
  }

  render() {
    return (
      <div id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
