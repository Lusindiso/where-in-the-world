import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';

const Navbar = ({ handleChange, searchTerm, handleClick, filterTerm }) => {
  const onHandleChange = e => {
    handleChange(e);
  };
  return (
    <div className='nav'>
      <div className='searcg'>
        <i className='fas fa-search'></i>
        <input
          type='text'
          className='search-input'
          id='search-input'
          placeholder='Search for country'
          onChange={onHandleChange}
          value={searchTerm}
          aria-label='Search input'
        />
      </div>
      <DropdownMenu handleClick={handleClick} filterTerm={filterTerm} />
    </div>
  );
};

export default Navbar;
