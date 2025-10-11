import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Playlist = () => {
  const { playlist, playSong } = useContext(PlayerContext);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Playlist</h2>
      <ul className="space-y-2">
        {playlist.map((song) => (
          <li
            key={song.id}
            className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => playSong(song)}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
