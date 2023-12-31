import React from 'react';
import './MusicPlayerPage.scss'
import MusicInformation from '../../components/MusicInformation';
import MusicPlayer from '../../components/MusicPlayer';

export const MusicPlayerPage: React.FC = () => {

  return (
    <section className='MusicPlayerPage Main__content'>
      <MusicInformation />

      <MusicPlayer />
    </section>
  );
};
