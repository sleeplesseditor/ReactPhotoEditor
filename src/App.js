import React, { useState } from 'react';
import './App.scss';
import Slider from './components/Slider'
import SidebarItem from './components/SideBarItem';
import { DEFAULT_OPTIONS } from './components/Options';

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [image, setImage] = useState();
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { 
      filter: filters.join(' ')
    }
  }

  return (
    <div className="container">
      <div className="image-container">
        {image ? image && <img className="main-image" src={URL.createObjectURL(image)} alt="" style={getImageStyle()} />   : null}
        <input aria-label="image file select" className="custom-file-input" type="file" onChange={(e) => setImage(e.target.files?.item(0))} />
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
      </div>
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App;