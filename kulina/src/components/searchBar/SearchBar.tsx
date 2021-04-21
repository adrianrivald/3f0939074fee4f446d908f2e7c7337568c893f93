import React, { FC } from 'react';
import place from '../../assets/images/place.svg'
import './SearchBar.scss';

interface SearchBarProps {
    value: string;
    onChange: (e: any) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { value, onChange } = props;

  return (
    <div className='search-container-product'>
      <img alt='search' src={place} />
      <input
        type='text'
        name='search_query'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
