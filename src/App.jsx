import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/coreComponents/Button';
import { Input } from './components/coreComponents/Input';

function App() {
  return (
    <div className="App">
      <Button size={55} outline>Hello</Button>
      <Button size={55} primary>Hello</Button>
      <Button size={55} ghost>Hello</Button>
      <Input type="text" size={10} primary />

    </div>
  );
}

export default App;
