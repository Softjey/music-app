import React from 'react';

import './AudioControls.scss';
import PlayPauseButton from '../../UI/Buttons/PlayPauseButton';

export const AudioControls: React.FC = () => {

  return (
    <div className='AudioControls'>
      <PlayPauseButton />
    </div>
  );
};
