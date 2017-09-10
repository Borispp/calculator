import React from 'react';
import Button from 'components/Button';

export default ({label, style, className, type, onClick}) => {
  return (
    <div className="calculator-button-item" style={style}>
      <Button label={label} className={className} onClick={() => onClick(label, type)} />
    </div>
  );
}