import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/coreComponents/Button';

function App() {
  return (
    <div className="App">
      <Button size={55} outline>Hello</Button>
    </div>
  );
}

export default App;
