import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <div className='heading'>
        <Link to='/' className='header_link'>
          Where in the world
        </Link>
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
