import React, { CSSProperties } from 'react';
import './RatingDisplay.scss';
import starActiveIcon from '../../../assets/images/star-active.png';
import yellowStarActiveIcon from '../../../assets/images/yellow-star-active.png';
import starIcon from '../../../assets/images/star.png';

interface RatingDisplayProps {
    rating: number | string;
    color: 'red';
    withNumber: boolean;
    starStyles?: CSSProperties;
    fontStyles?: CSSProperties;
}

const RatingDisplay = (Props: RatingDisplayProps) => {
  const { rating, color, withNumber, starStyles, fontStyles } = Props;

  return (
    <div className='rating'>
      <img
        alt='share'
        src={rating < 1 ? starIcon : starActiveIcon}
        className='star'
        style={starStyles}
      />
      <img
        alt='share'
        src={rating < 2 ? starIcon : starActiveIcon}
        className='star'
        style={starStyles}
      />
      <img
        alt='share'
        src={rating < 3 ? starIcon : starActiveIcon}
        className='star'
        style={starStyles}
      />
      <img
        alt='share'
        src={rating < 4 ? starIcon : starActiveIcon}
        className='star'
        style={starStyles}
      />
      <img
        alt='share'
        src={rating < 5 ? starIcon : starActiveIcon}
        className='star'
        style={starStyles}
      />
      {withNumber ? (
        <span className="number" style={fontStyles}>
          ({rating})
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default RatingDisplay;
