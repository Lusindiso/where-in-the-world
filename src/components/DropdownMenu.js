import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ handleClick, filterTerm }) => {
  const onHandleClick = e => {
    handleClick(e);
  };
  return (
    <div className='dropdown'>
      <button className='dropbtn' id='dropbtn'>
        Filter by Region
      </button>
      <div className='dropdown-content' id='dropdown-content'>
        <span onClick={onHandleClick} className='Africa'>
          Africa
        </span>
        <span onClick={onHandleClick} className='Americas'>
          Americas
        </span>
        <span onClick={onHandleClick} className='Asia'>
          Asia
        </span>
        <span onClick={onHandleClick} className='Europe'>
          Europe
        </span>
        <span onClick={onHandleClick} className='Oceania'>
          Oceania
        </span>
      </div>
    </div>
  );
};

export default DropdownMenu;
