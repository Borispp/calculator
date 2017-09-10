import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import Calculator from 'components/calculator/Calculator';
import Button from 'components/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

describe('<Calculator />', () => {
  it('Input works', () => {
    const CalculatorComponent = mount(<Calculator />);
    CalculatorComponent.find(Button).at(3).simulate('click');
    expect(CalculatorComponent.instance().state.value[0]).toBe('8');
  });

  it('Calculating works', () => {
    const CalculatorComponent = mount(<Calculator />);
    CalculatorComponent.setState({value: ['8', '+', '4']});

    // Click "=" button
    CalculatorComponent.find(Button).at(16).simulate('click');
    expect(CalculatorComponent.instance().state.result).toBe(12);
  });

  it('Handling division by zero', () => {
    const CalculatorComponent = mount(<Calculator />);
    CalculatorComponent.setState({value: ['8', '/', '0']});

    // Click "=" button
    CalculatorComponent.find(Button).at(16).simulate('click');
    expect(CalculatorComponent.find('.calculator-result').text()).toBe('Bad input');
  });
});