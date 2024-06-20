import React, { useState } from 'react';

function Validator() {
  const [code, setCode] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidate = async () => {
    const response = await fetch('http://localhost:8080/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await response.json();
    setValidationResult(data.validationResult);
  };

  return (
    <div>
      <h2>Code Validator</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <button onClick={handleValidate}>Validate</button>
      <pre>{validationResult}</pre>
    </div>
  );
}

export default Validator;

