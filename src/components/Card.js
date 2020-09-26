import React from 'react';
import './Card.css';

const Card = ({ country }) => {
  return (
    <div className='card'>
      <img src={country.flag} alt='country flag' />
      <div className='card__content'>
        <h2 className='card__heading'>{country.name}</h2>
        <ul className='card__list'>
          <li className='card__item'>
            Population: <span>{country.population}</span>
          </li>
          <li className='card__item'>
            Region: <span>{country.region}</span>
          </li>
          <li className='card__item'>
            Capital: <span>{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
