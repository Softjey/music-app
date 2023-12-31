import React from 'react';

import './RoundButton.scss';

interface Props {
  iconPath: string,
  onClick: () => void,
}

export const RoundButton: React.FC<Props> = ({
  iconPath,
  onClick,
}) => {

  return (
    <button className='RoundButton' onClick={onClick}>
      <img src={iconPath} />
    </button>
  );
};
