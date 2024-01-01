import React from 'react';
import './MusicPlayerPage.scss'
import MusicInformation from '../../components/MusicInformation';
import AudioPlayer from '../../components/AudioPlayer';

export const MusicPlayerPage: React.FC = () => {

  return (
    <section className='MusicPlayerPage Main__content'>
      {/* <MusicInformation /> */}

      <AudioPlayer />
    </section>
  );
};
