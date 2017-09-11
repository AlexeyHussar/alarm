import React from 'react';
import Clock from './components/Clock';
import AlarmSetter from './components/AlarmSetter';
import AlarmSong from './components/AlarmSong';
//import Setted from './components/Setted';
import './App.css';

const App = () => (
  <div>
    <Clock />
    <AlarmSetter />
    <AlarmSong />
  </div>
);

export default App;
