import React, { useState } from 'react';

export const Svg = () => {
  const [xyShift, setXYShift] = useState('10');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXYShift(e.target.value);
  };

  return (
    <div>
      <input type="range" min="10" max="50" onChange={onChange} value={xyShift} />

      <hr/>

      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#f00" x={xyShift} y={xyShift} width="20" height="20" />

        <polyline points="50,150 55,200 200,200 150,100" stroke="red" strokeWidth="4" fill="none" />

        <ellipse cx="100" cy="50" rx={xyShift} ry="50" />

        <path d="M 130 10 C 130 50, 280 50, 280 10 L 390 0" stroke="black" fill="#0f0" strokeWidth="2"/>
      </svg>
    </div>
  );
};
