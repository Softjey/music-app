import React, { useState } from 'react';
import './AudioPlayer.scss';
import '../../pages/AudioPlayerPage/AudioPlayerPage.scss';
import AudioProgressBar from '../../UI/AudioProgressBar';
import AudioControlBar from '../AudioControlBar';

export const AudioPlayer: React.FC = () => {
  const [audioProgress, setAudioProgress] = useState(100);

  return (
    <div className='AudioPlayer AudioPlayer__show AudioPlayerPage__bottom'>
      <div className='AudioPlayer__content'>
        <AudioControlBar />

        <AudioProgressBar
          songDuration={300}
          audioProgress={audioProgress}
          setAudioProgress={setAudioProgress}
        />
      </div>
    </div>
  );
};
