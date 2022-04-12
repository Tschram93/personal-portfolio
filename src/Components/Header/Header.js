import React from 'react';
import NavBar from '../NavBar/NavBar';
import * as FaIcons from 'react-icons/fa';

const Header = () => {
	return (
		<header className='py-6'>
			<div className='container flex lg:px-24 items-center justify-between md:px-14 mx-auto px-8 w-full'>
				<div className='font-bold text-lg'>Travis Schram</div>
				<NavBar />
			</div>
			<div className='md:hidden'>
			</div>
		</header>
	);
};

export default Header;
