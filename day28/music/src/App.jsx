import React from 'react';
import Playlist from './components/Playlist';
import VolumeControl from './components/VolumeControl';
import PlayerBar from './components/PlayerBar';

const App = () => (
  <div className="min-h-screen pb-20">
    <Playlist />
    <VolumeControl />
    <PlayerBar />
  </div>
);

export default App;
