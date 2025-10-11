import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playlist] = useState([
    { id: 1, title: 'Song A' },
    { id: 2, title: 'Song B' },
    { id: 3, title: 'Song C' },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const stored = localStorage.getItem('currentSong');
    if (stored) setCurrentSong(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (currentSong) {
      localStorage.setItem('currentSong', JSON.stringify(currentSong));
    }
  }, [currentSong]);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => setIsPlaying(false);

  const nextSong = () => {
    if (!currentSong) return;
    const index = playlist.findIndex((s) => s.id === currentSong.id);
    const next = playlist[(index + 1) % playlist.length];
    playSong(next);
  };

  const prevSong = () => {
    if (!currentSong) return;
    const index = playlist.findIndex((s) => s.id === currentSong.id);
    const prev = playlist[(index - 1 + playlist.length) % playlist.length];
    playSong(prev);
  };

  const changeVolume = (val) => setVolume(val);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playlist,
        volume,
        playSong,
        pauseSong,
        nextSong,
        prevSong,
        changeVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
