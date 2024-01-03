import React, { useContext } from 'react';
import { AudioContext } from '../../../store/AudioContext'

import './PlayPauseButton.scss';

export const PlayPauseButton: React.FC = () => {
  const { isPlaying, tooglePlaying } = useContext(AudioContext);

  const playIcon = './src/assets/images/icons/play-icon.svg';
  const pauseIcon = './src/assets/images/icons/pause-icon.svg';

  return (
    <div className='PlayPauseButton'>
      <button className='PlayPauseButton__button' onClick={tooglePlaying}>
        <img src={isPlaying ? pauseIcon : playIcon} />
      </button>
    </div>
  );
};
