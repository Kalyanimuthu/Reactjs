import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const VolumeControl = () => {
  const { volume, changeVolume } = useContext(PlayerContext);

  return (
    <div className="p-4">
      <label className="block mb-2 font-semibold">Volume: {volume}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => changeVolume(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
};

export default VolumeControl;
