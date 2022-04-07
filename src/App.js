import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work';
import './App.css';

function App() {
	return (
		<div className='App text-white font-poppins pb-12'>
			<Header />
			<Hero />
			<Work />
			<About />
			<Contact />
		</div>
	);
}

export default App;
