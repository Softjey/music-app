import React from 'react';
import './AudioPlayerPage.scss'
import MusicInformation from '../../components/MusicInformation';
import AudioPlayer from '../../components/AudioPlayer';
import { AudioProvider } from '../../store/AudioContext';

export const AudioPlayerPage: React.FC = () => {

  return (
    <AudioProvider>
      <section className='AudioPlayerPage Main__content'>
        <MusicInformation />

        <AudioPlayer />
      </section>
    </AudioProvider>
  );
};
