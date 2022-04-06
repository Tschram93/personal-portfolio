import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
	return (
		<header className='py-6'>
			<div className='container flex lg:px-24 items-center justify-between md:px-14 mx-auto px-8 w-full'>
				<div className='text-lg'>Travis Schram</div>
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
