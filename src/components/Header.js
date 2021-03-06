import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const modeSwitcher = () => {
  let app = document.getElementById('app');
  app.classList.toggle('is-dark');
};
const Header = () => {
  return (
    <div className='Header' id='header'>
      <div className='heading'>
        <Link to='/' className='link' id='link'>
          Where in the world?
        </Link>
        <div className='mode-dark' onClick={modeSwitcher}>
          <i className='fa fa-moon'></i> Dark Mode
        </div>
        <div className='mode-light' onClick={modeSwitcher}>
          <i className='fa fa-sun'></i> Light Mode
        </div>
      </div>
    </div>
  );
};

export default Header;
