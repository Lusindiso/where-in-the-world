import { combineReducers } from 'redux';

const countriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_COUNTRY':
      return payload;

    default:
      return state;
  }
};

const selectedCountryReducer = (state = null, { type, payload }) => {
  switch (type) {
    case 'COUNTRY_SELECTED':
      return payload;

    case 'COUNTRY_UNSELECTED':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
});
