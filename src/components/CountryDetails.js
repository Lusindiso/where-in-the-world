import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unselectCountry } from '../actions';

const CountryDetails = props => {
  return (
    <div>
      <div>{props.selectedCountry.country}</div>
      <Link to='/' onClick={() => props.unselectCountry}>
        BACK
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedCountry: state.selectedCountry,
});

export default connect(mapStateToProps, { unselectCountry })(CountryDetails);
