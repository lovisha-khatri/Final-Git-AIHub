import React, { useState } from 'react';

function Formatter() {
  const [code, setCode] = useState('');
  const [formattedCode, setFormattedCode] = useState('');

  const handleFormat = async () => {
    const response = await fetch('http://localhost:8080/format', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await response.json();
    setFormattedCode(data.formattedCode);
  };

  return (
    <div>
      <h2>Code Formatter</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <button onClick={handleFormat}>Format</button>
      <pre>{formattedCode}</pre>
    </div>
  );
}

export default Formatter;
