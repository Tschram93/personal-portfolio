import React from 'react';
import Button from '../Button/Button';
// import HeroTabs from './HeroTabs/HeroTabs';
import Picture from '../../images/coding.jpeg';

const Hero = () => {
	return (
		<section className='container flex items-center justify-between md:px-14 mt-16 mx-auto lg:px-24 px-8 w-full'>
			<div className='flex md:flex-wrap md:flex-nowrap'>
				{/* <nav className='fixed inline-block hidden left-percentage lg:mr-24 lg:w-4 xl:block'>
					<div className='absolute left-50 mt-36 space-y-6 transform -translate-x-1/2 '>
						<HeroTabs section={'Home'} />
						<HeroTabs section={'Work'} />
						<HeroTabs section={'About'} />
						<HeroTabs section={'Resume'} />
						<HeroTabs section={'Contact'} />
					</div>
				</nav> */}
				<div className='flex flex-wrap max-w-xl md:justify-start md:my-36 mt-0 lg:ml-20 justify-center'>
					<h1 className='font-bold lg:text-7xl md:text-6xl md:text-left text-5xl text-center'>
						Building <br /> beautiful web experiences.
					</h1>
					<Button />
				</div>
				<img className='md:absolute -mt-6 md:mt-0 sm:mr-4 mt-12 right-0 w-2/5 -z-1' src={Picture} alt="laptop with computer code on screen" />
			</div>
		</section>
	);
};

export default Hero;
