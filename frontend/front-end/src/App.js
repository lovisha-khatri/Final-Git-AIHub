import React from 'react';
import Formatter from './components/Formatter';
import Validator from './components/Validator';
import Converter from './components/Converter';
import Visualizer from './components/Visualizer';

function App() {
  return (
    <div className="App">
      <h1>Code Utility Tools</h1>
      <Formatter />
      <Validator />
      <Converter />
      <Visualizer />
    </div>
  );
}

export default App;
