import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <Header />

          <Route path='/' exact component={CountryList} className='main' />
          <Route path='/details' exact component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
