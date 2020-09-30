import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const modeSwitcher = () => {
  let app = document.getElementById('app');
  app.classList.toggle('is-dark');
  let header = document.getElementById('header');
  header.classList.toggle('is-dark');
  let link = document.getElementById('link');
  link.classList.toggle('is-dark');
  let search = document.getElementById('search-input');
  search.classList.toggle('is-dark');
  // let card = document.querySelectorAll('card');
  // card.classList.toggle('is-dark');
};
const Header = () => {
  return (
    <div className='Header' id='header'>
      <div className='heading'>
        <Link to='/' className='link' id='link'>
          Where in the world?
        </Link>
        <div className='mode' onClick={modeSwitcher}>
          Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Header;
