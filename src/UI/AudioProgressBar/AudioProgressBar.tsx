import React from 'react';

import './AudioProgressBar.scss';
import { convertSecondsToMinutes } from '../../utils/convertSecondsToMinutes';
import classNames from 'classnames-ts';

interface Props {
  songDuration: number,
  audioProgress: number,
  setAudioProgress: React.Dispatch<React.SetStateAction<number>>
}

export const AudioProgressBar: React.FC<Props> = ({
  songDuration,
  audioProgress,
  setAudioProgress,
}) => {
  const percentHasPassed = (audioProgress / songDuration) * 100;
  const sliderGradient = `linear-gradient(
      90deg,
      #5D24D6 0%,
      #7E74ED ${percentHasPassed}%,
      #f7f6f8 ${percentHasPassed}%
    )`;

  const sliderClasses = classNames(
    'AudioProgressBar__slider',
    { ['AudioProgressBar__slider--end-start']: percentHasPassed < 10 || percentHasPassed > 90 }
  );

  const timeHasPassed = convertSecondsToMinutes(audioProgress);
  const timeLeft = convertSecondsToMinutes(songDuration - audioProgress);
  return (
    <div className='AudioProgressBar'>
      <input
        className={sliderClasses}
        type="range"
        min={0}
        max={songDuration}
        value={audioProgress}
        onChange={(event) => setAudioProgress(+event.target.value)}
        style={{ background: sliderGradient }}
      />

      <div className='AudioProgressBar__times'>
        <span className='AudioProgressBar__time'>{timeHasPassed}</span>
        <span className='AudioProgressBar__time'>{timeLeft}</span>
      </div>
    </div>
  );
};
