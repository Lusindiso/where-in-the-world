import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unselectCountry } from '../actions';

import './NavDetails.css';

const NavDetails = props => {
  return (
    <Link
      to='/'
      onClick={() => props.unselectCountry}
      className='button link'
      id='link'
    >
      <span>&#x2190;</span> Back
    </Link>
  );
};

const mapStateToProps = state => ({
  selectedCountry: state.selectedCountry,
});
export default connect(mapStateToProps, { unselectCountry })(NavDetails);
