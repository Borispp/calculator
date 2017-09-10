import React from 'react';

import '../css/button.css';

export default ({label,className, onClick}) => {
  return (<button className={`btn ${className ? className : ''}`} onClick={onClick} >{label}</button>);
};