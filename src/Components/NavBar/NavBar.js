import React from 'react';

const NavBar = () => {
	return (
		<nav className=''>
			<a href='#'className='text-selected-text'>Home</a>
			<a href='#work'>My Work</a>
			<a href='#about'>About</a>
			<a href='#contact'> <button>Contact</button></a>
		</nav>
	);
};

export default NavBar;
