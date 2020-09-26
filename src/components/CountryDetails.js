import React from 'react';
import './CountryDetails.scss';
import NavDetails from './NavDetails';
import { connect } from 'react-redux';

const CountryDetails = ({ country }) => {
  return (
    <div className='container'>
      <div className='nav'>
        <NavDetails />
      </div>

      <div className='details'>
        <div className='country-flag'>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className='flag'
          />
        </div>
        <div className='country-content'>
          <h2 className='country__heading'>{country.name}</h2>
          <ul className='country__list-left'>
            <li className='country__item'>
              Native Name: <span>{country.nativeName}</span>
            </li>
            <li className='country__item'>
              Population: <span>{country.population}</span>
            </li>
            <li className='country__item'>
              Region: <span>{country.region}</span>
            </li>
            <li className='country__item'>
              Sub Region: <span>{country.subregion}</span>
            </li>
            <li className='country__item'>
              Capital: <span>{country.capital}</span>
            </li>
          </ul>
          <ul className='country__list-right'>
            <li className='country__item'>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </li>
            <li className='country__item'>
              Currencies: <span>{country.capital}</span>
            </li>
            <li className='country__item'>
              Languages: <span>{country.capital}</span>
            </li>
          </ul>
          <div className='country-borders'>Border Countries: </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  country: state.selectedCountry,
});

export default connect(mapStateToProps, {})(CountryDetails);
