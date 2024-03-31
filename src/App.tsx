import React from 'react';
import './App.css';
import { Button } from './components/coreComponents/ButtonCore/Button';
import { Input } from './components/coreComponents/InputCore/Input';
import { Collapse } from './components/coreComponents/CollapseCore/Collapse';
import { Search } from './components/coreComponents/SearchCore/Serach';
import { Map } from './components/coreComponents/MapComponent/Map';


function App() {
  return (
    <div className="App">
      <Button size={55} outline>Hello</Button>
      <Button size={55} primary>Hello</Button>
      <Button size={55} ghost>Hello</Button>
      <Input placeholder='Hello...' type="text" size={20} primary />
      <Collapse tittle='Hello Denis'>
        <p>In this world, is the destiny of mankind controlled
          by some transcendental entity or law...? Is it like the hand of God hovering above?</p>
        <p> At least it is true that man has no control, even over his own will.</p>
      </Collapse>
      <Search placeholder='По названию или существу...' />
      <Map></Map>
    </div>
  );
}

export default App;
