'use client';
import { useState } from 'react';
import { SearchManufacturer } from './';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <>
      <form
        className='search-bar'
        onSubmit={handleSearch}>
        <div className='search-bar__item'></div>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </form>
    </>
  );
};

export default SearchBar;
