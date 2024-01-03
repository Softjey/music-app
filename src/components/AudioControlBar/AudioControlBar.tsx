import React from 'react';

import './AudioControlBar.scss';
import AudioControls from '../AudioControls';
import { RepeatButton } from '../../UI/Buttons/RepeatButton/RepeatButton';

export const AudioControlBar: React.FC = () => {

  return (
    <div className='AudioControlBar'>
      {/* <RepeatButton /> */}

      <AudioControls />
    </div>
  );
};
