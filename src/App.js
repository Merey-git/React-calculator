import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [calculated, setCalculated] = useState(false);

  const handleClick = (value) => {
    if (calculated) {
      setDisplay(value);
      setCalculated(false);
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setCalculated(false);
  };

  const handleDelete = () => {
    setDisplay(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
      setCalculated(true);
    } catch {
      setDisplay('Error');
      setCalculated(true);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((i) => (
          <button 
            key={i} 
            className={i === "=" || i === "+" || i === "-" || i === "*" || i === "/" ? "operator" : "number"}
            onClick={() => i === "=" ? handleCalculate() : handleClick(i)}
          >
            {i}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>C</button>
        <button className="delete" onClick={handleDelete}>←</button>
      </div>
    </div>
  );
}

export default Calculator;
