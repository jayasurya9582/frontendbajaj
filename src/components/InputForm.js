// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onJsonChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onJsonChange(event.target.value); // Pass the value to the parent
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder='Enter JSON data'
    />
  );
};

export default InputForm;
