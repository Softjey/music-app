import React, { memo } from 'react';

import './CoverArt.scss';

interface Props {
  imgUrl: string,
  altText: string,
  classes?: string,
}

export const CoverArt: React.FC<Props> = memo(({
  imgUrl,
  altText,
  classes = '',
}) => (
  <div className={'CoverArt' + classes}>
    <img className='CoverArt__img' src={imgUrl} alt={altText} />
  </div>
));

