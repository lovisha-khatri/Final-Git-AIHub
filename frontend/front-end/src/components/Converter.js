import React, { useState } from 'react';

function Converter() {
  const [inputData, setInputData] = useState('');
  const [outputData, setOutputData] = useState('');

  const handleConvert = async () => {
    const response = await fetch('http://localhost:8080/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputData })
    });
    const data = await response.json();
    setOutputData(data.outputData);
  };

  return (
    <div>
      <h2>Data Converter</h2>
      <textarea
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Paste your data here..."
      />
      <button onClick={handleConvert}>Convert</button>
      <pre>{outputData}</pre>
    </div>
  );
}

export default Converter;
