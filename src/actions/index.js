import restCountries from '../apis/restCountries';

export const fetchCountry = () => async dispatch => {
  const response = await restCountries.get('/all');

  dispatch({
    type: 'FETCH_COUNTRY',
    payload: response.data,
  });
};

export const selectCountry = country => ({
  type: 'COUNTRY_SELECTED',
  payload: country,
});

export const unselectCountry = () => ({
  type: 'COUNTRY_UNSELECTED',
  payload: null,
});
