import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className='App' id='app'>
				<Header />
				<Routes>
					<Route path='/' element={<CountryList />} />
					<Route path='/details' element={<CountryDetails />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
