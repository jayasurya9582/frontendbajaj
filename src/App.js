import React, { useState } from 'react';
import InputForm from './components/InputForm'; // Adjust path if necessary
import FilterDropdown from './components/FilterDropdown'; // Adjust path if necessary
import ResponseDisplay from './components/ResponseDisplay'; // Adjust path if necessary

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [jsonInput, setJsonInput] = useState(''); // Define jsonInput state
  const [error, setError] = useState(''); // Define setError state

  // Function to handle form submission
  const submitData = async () => {
    setError('');
    try {
        // Validate and parse JSON input
        const parsedData = JSON.parse(jsonInput);

        // Check for required key
        if (!parsedData.data || !Array.isArray(parsedData.data)) {
            throw new Error("Invalid input: 'data' should be an array.");
        }

        // Make POST request to API
        const response = await fetch('https://backend-2-z016.onrender.com/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parsedData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setResponse(result);
    } catch (error) {
        console.error('Error:', error); // Log the error for debugging
        setError(`Invalid JSON format or API error: ${error.message}`);
    }
};


  return (
    <div>
      <h1>Roll Number: 21BCE9582</h1>
      <InputForm onJsonChange={setJsonInput} /> {/* Pass setJsonInput to InputForm */}
      <button onClick={submitData}>Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {response && (
        <div>
          <FilterDropdown
            options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
            selectedOptions={selectedOptions}
            onSelect={setSelectedOptions}
          />
          <ResponseDisplay data={response} selectedOptions={selectedOptions} />
        </div>
      )}
    </div>
  );
};

export default App;
