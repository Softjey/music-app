import React, { useContext } from 'react';

import '../styles/RoundButton.scss';
import { AudioContext } from '../../../store/AudioContext';

export const LikeButton: React.FC = () => {
  const {likedSongs, currentSong } = useContext(AudioContext);

  if (likedSongs.includes(currentSong.id)) {

  }

  return (
    <button className='RoundButton' onClick={}>
      <img src={ } />
    </button>
  );
};
