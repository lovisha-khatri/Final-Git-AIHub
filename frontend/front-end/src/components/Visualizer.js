import React, { useState } from 'react';

function Visualizer() {
  const [inputData, setInputData] = useState('');
  const [visualizedData, setVisualizedData] = useState('');

  const handleVisualize = async () => {
    const response = await fetch('http://localhost:8080/visualize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: inputData })
    });
    const result = await response.json();
    setVisualizedData(result.visualizedData);
  };

  return (
    <div>
      <h2>Data Visualizer</h2>
      <textarea
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Paste your data here..."
      />
      <button onClick={handleVisualize}>Visualize</button>
      <pre>{visualizedData}</pre>
    </div>
  );
}

export default Visualizer;

