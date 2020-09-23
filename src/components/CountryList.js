import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry, fetchCountry } from '../actions';
import Card from './Card';
import './CountryList.css';

const CountryList = props => {
  useEffect(props => {
    props.fetchCountry();
  }, []);
  const renderList = () =>
    props.countries.map(country => (
      <div key={country.id}>
        <Link
          className='link'
          to='/details'
          onClick={() => props.selectCountry(country)}
        >
          <Card country={country} />
        </Link>
      </div>
    ));

  return <div className='main'>{renderList()}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return { countries: state.countries };
};

export default connect(mapStateToProps, { selectCountry, fetchCountry })(
  CountryList,
);
