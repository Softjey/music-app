import React from 'react';
import './MusicInformation.scss';
import '../../pages/AudioPlayerPage/AudioPlayerPage.scss'
import CoverArt from '../../UI/CoverArt';

export const MusicInformation: React.FC = () => {

  return (
    <div className='MusicInformation AudioPlayerPage__top'>
      <div className='MusicInformation__content'>
        <CoverArt
          imgUrl='./src/assets/images/musicTestAvatar.png'
          altText='Song Cover'
        />

        <div className='MusicInformation__song-info'>
          <span className='MusicInformation__status'>Now playing</span>
          <h2 className='MusicInformation__song-name'>Purple Haze</h2>

          <p className='MusicInformation__author'>Jimi Hendrix</p>
          <p className='MusicInformation__album'>Woodstock</p>
        </div>

        <div className='MusicInformation__buttons'>
          {/* <RoundButton
            iconPath='/src/assets/images/icons/is-liked-icon.svg'
            onClick={() => {}}
          />

          <RoundButton
            iconPath='/src/assets/images/icons/add-playlist-icon.svg'
            onClick={() => {}}
          />

          <RoundButton
            iconPath='/src/assets/images/icons/share-icon.svg'
            onClick={() => {}}
          /> */}
        </div>
      </div>
    </div>
  );
};
