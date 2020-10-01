import React from 'react';
import './CountryDetails.scss';
import { Link } from 'react-router-dom';
import NavDetails from './NavDetails';
import { connect } from 'react-redux';
import { selectCountry } from '../actions';

const CountryDetails = ({ country, countries, selectCountry }) => {
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
              Currencies:
              {country.currencies.map(currency => (
                <span> {currency.name} </span>
              ))}
            </li>
            <li className='country__item'>
              Languages:
              {country.languages.map(language => (
                <span> {language.name},</span>
              ))}
            </li>
          </ul>
          <div className='country-borders'>
            Border Countries:
            {country.borders.map(border =>
              countries
                .filter(item => item.alpha3Code === border)
                .map(state => (
                  <Link
                    to='/details'
                    onClick={() => selectCountry(state)}
                    className='button link'
                  >
                    {state.name}
                  </Link>
                )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  country: state.selectedCountry,
  countries: state.countries,
});

export default connect(mapStateToProps, { selectCountry })(CountryDetails);
