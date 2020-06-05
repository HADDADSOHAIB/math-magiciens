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
    const { next, total, operation } = this.state;
    this.setState(calculate({ next, total, operation }, buttonName));
  }

  render() {
    const { next, total } = this.state;
    const result = next || total;

    return (
      <div id="app">
        <Display result={result || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
