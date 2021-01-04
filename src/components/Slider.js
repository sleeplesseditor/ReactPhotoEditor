import React from 'react';
import './Inputs.scss';

const Slider = ({ min, max, value, handleChange}) => {
  return (
    <div className="slider-container">
        <span>{value}%</span>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Slider;