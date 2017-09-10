import React from 'react';

export default ({value, result}) => {
  return (
    <div className="calculator-results">
      <div className="calculator-results-history">
        {value}
      </div>

      {
        result &&
        <div className="calculator-result">
          {
            isFinite(result) ? result : 'Bad input'
          }
        </div>
      }
    </div>
  );
};