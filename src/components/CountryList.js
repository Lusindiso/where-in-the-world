import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry, fetchCountry } from '../actions';
import Card from './Card';
import Navbar from './Navbar';
import './CountryList.css';

const CountryList = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  useEffect(() => {
    props.fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleClick = e => {
    setFilterTerm(e.target.className);
  };

  const renderList = () =>
    props.countries
      .filter(item =>
        item.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
      )
      .filter(term => term.region.includes(filterTerm))
      .map(country => (
        <Link
          key={country.name.common}
          className='link'
          to='/details'
          onClick={() => props.selectCountry(country)}
        >
          <Card country={country} />
        </Link>
      ));

  return (
    <div className='container'>
      <Navbar
        handleChange={handleChange}
        handleClick={handleClick}
        filterTerm={filterTerm}
        searchTerm={searchTerm}
      />
      <div className='main'>{renderList()}</div>;
    </div>
  );
};

const mapStateToProps = state => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, { selectCountry, fetchCountry })(
  CountryList,
);
