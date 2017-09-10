import React, { Component } from 'react';

import Calculator from './components/calculator/Calculator';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
