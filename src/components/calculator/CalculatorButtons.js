import React from 'react';
import CalculatorButtonItem from 'components/calculator/CalculatorButtonItem';

export default ({onClick}) => {
  const ButtonsList = [
    {label: "AC", style: {flexBasis: '75%'}, className: "darker", type: "reset"},
    {label: "/", className: "blue", type: "operator"},
    {label: "7"},
    {label: "8"},
    {label: "9"},
    {label: "*", className: "blue", type: "operator"},
    {label: "4"},
    {label: "5"},
    {label: "6"},
    {label: "+", className: "blue", type: "operator"},
    {label: "1"},
    {label: "2"},
    {label: "3"},
    {label: "-", className: "blue", type: "operator"},
    {label: "0", style: {flexGrow: 2}},
    {label: ".", type: "operator"},
    {label: "=", className: "blue", type: "operator"}
  ];

  return (
    <div className="calculator-buttons">
      {
        ButtonsList.map(({label, className, style, type}, i) => {
          return <CalculatorButtonItem label={label} className={className} style={style} type={type} onClick={onClick} key={i} />
        })
      }
    </div>
  );
};