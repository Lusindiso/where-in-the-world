import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App' id='app'>
          <Header />

          <Route path='/' exact component={CountryList} />
          <Route path='/details' exact component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
