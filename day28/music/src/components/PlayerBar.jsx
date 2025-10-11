import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const PlayerBar = () => {
  const {
    currentSong,
    isPlaying,
    pauseSong,
    playSong,
    nextSong,
    prevSong,
  } = useContext(PlayerContext);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 flex justify-between items-center">
      <div>{currentSong ? currentSong.title : 'No song playing'}</div>
      <div className="flex gap-4 items-center">
        <button onClick={prevSong}>⏮️</button>
        {isPlaying ? (
          <button onClick={pauseSong}>⏸️</button>
        ) : (
          <button onClick={() => playSong(currentSong)}>▶️</button>
        )}
        <button onClick={nextSong}>⏭️</button>
      </div>
    </footer>
  );
};

export default PlayerBar;
