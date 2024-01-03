import React, { useContext } from 'react';

import '../styles/InsetButton.scss'
import Repeat from '../../../constants/RepeatButtonState';
import { AudioContext } from '../../../store/AudioContext';

export const RepeatButton: React.FC = () => {
  const { repeat, toggleRepeat} = useContext(AudioContext);

  const getIconPath = () => {
    switch (repeat) {
      case Repeat.None:
        return './src/assets/images/icons/repeat-none-icon.svg';
      case Repeat.Playlist:
        return './src/assets/images/icons/repeat-playlist-icon.svg'
      case Repeat.Song:
        return './src/assets/images/icons/repeat-song-icon.svg'
    }
  }

  return (
    <button className='InsetButton' onClick={toggleRepeat}>
      <img src={getIconPath()} />
    </button>
  );
};
