import React, { CSSProperties } from 'react';
import './RatingDisplay.scss';
import starActiveIcon from '../../assets/images/star-active.png';
import starIcon from '../../assets/images/star.png';

interface RatingDisplayProps {
    rating: number | string;
    withNumber: boolean;
    starStyles?: CSSProperties;
    fontStyles?: CSSProperties;
}

const RatingDisplay = (Props: RatingDisplayProps) => {
  const { rating, withNumber, starStyles, fontStyles } = Props;

  return (
    <div className='rating'>
    {withNumber ? (
      <span className="number" style={fontStyles}>
        {rating}
      </span>
    ) : (
      ''
    )}
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
    </div>
  );
};

export default RatingDisplay;
