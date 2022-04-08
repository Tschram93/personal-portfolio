import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Resume from './Components/Resume/Resume';
import Work from './Components/Work/Work';
import './App.css';

function App() {
	// function updateList() {
	// 	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
	// 		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	// 	});
	
	// 	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
		
	// 	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
	// };
	
	// updateList();
	// window.addEventListener('scroll', () => {
	// 	updateList();
	// })
	return (
		<div className='App text-white font-poppins pb-12'>
			<Header />
			<Hero />
			<Work />
			{/* Work: connect projects to each image */}
			<About />
			<Resume />
			<Contact /> 
		</div>
	);
}

export default App;
