import React from 'react';

const NavBar = () => {
	return (
		<nav className='hidden md:flex items-center space-x-12'>
			<a href='#'className='text-selected-text'>Home</a>
			<a href='#work'>My Work</a>
			<a href='#about'>About</a>
			<a href='#resume'>Resume</a>
			<a href='#contact'> <button className='bg-theme font-bold px-6 py-2'>Contact</button></a>
		</nav>
	);
};

export default NavBar;
