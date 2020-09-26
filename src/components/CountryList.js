import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry, fetchCountry } from '../actions';
import Card from './Card';
import Navbar from './Navbar';
import './CountryList.css';

const CountryList = props => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    props.fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const renderList = () =>
    props.countries
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
      )
      .map(country => (
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

  return (
    <div className='container'>
      <Navbar handleChange={handleChange} searchTerm={searchTerm} />
      <div className='main'>{renderList()}</div>;
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.countries);
  return { countries: state.countries };
};

export default connect(mapStateToProps, { selectCountry, fetchCountry })(
  CountryList,
);
