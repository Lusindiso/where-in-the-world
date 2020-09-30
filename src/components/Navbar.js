import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';

const Navbar = ({ handleChange, searchTerm }) => {
  const onHandleChange = e => {
    handleChange(e);
  };
  return (
    <div className='nav'>
      <input
        type='text'
        className='search-input'
        id='search-input'
        placeholder='Search for country'
        onChange={onHandleChange}
        value={searchTerm}
      />
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
