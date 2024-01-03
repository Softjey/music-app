import React from 'react';

import './Main.scss';
import AudioPlayerPage from '../../pages/AudioPlayerPage';

export const Main: React.FC = () => {

  return (
    <main className='Main'>
      <AudioPlayerPage />
    </main>
  );
};
