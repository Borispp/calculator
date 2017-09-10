import React from 'react';
import CalculatorResults from 'components/calculator/CalculatorResults';
import CalculatorButtons from 'components/calculator/CalculatorButtons';

import autoBind from 'react-autobind';


export default class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: [],
      result: null
    };

    autoBind(this);
  }

  onClick(value, type) {
    // @param {string} value - button value
    // @param {string} type - button type (operator)

    // If "AC" button pressed
    if (type === "reset") {
      this.setState({
        value: [],
        result: null
      });
      return;
    }

    // If "=" button pressed
    if (value === '=') this.calculateResult();

    // If you try to re-enter the action
    if (~['-','+','*','/', '.'].indexOf(this.state.value.slice(-1)[0]) && type === 'operator') {
      let newValue = this.state.value;
      newValue[newValue.length - 1] = value;

      this.setState({
        value: newValue
      });
      return;
    }

    // If starting expression with action
    if (this.state.value.length === 0 && type==='operator') {
      return;
    }

    // If last input was "="
    if (this.state.value.slice(-1)[0] === '=') {

      this.setState({
        value: type === 'operator' ? [] : [value],
        result: null
      });
      return;
    }

    let newValue = this.state.value.concat(value);

    this.setState({
      value: newValue
    });
  }

  calculateResult() {
    if (~['-','+','*','/', '.', '='].indexOf(this.state.value.slice(-1)[0])) return;

    let currentValue = this.state.value.slice(0);

    if (currentValue[0] === "0" && currentValue[1] !== '.') {
      currentValue[0] = '.';
    }

    this.setState({result: eval(currentValue.join(''))});
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorResults value={this.state.value} result={this.state.result} />
        <CalculatorButtons onClick={this.onClick} />
      </div>
    )
  }
}