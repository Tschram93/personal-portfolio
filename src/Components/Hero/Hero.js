import React from 'react';

const Hero = () => {
	return (
		<section className='container flex items-center justify-between md:px-14 mt-16 mx-auto lg:px-24 px-8 w-full'>
			<div className='flex md:flex-wrap md:flex-nowrap'>
				<nav className='fixed inline-block hidden left-percentage lg:mr-24 lg:w-4 xl:block'>
					<div className='absolute left-50 mt-36 space-y-6 transform -translate-x-1/2 '>
						<a
							className='bg-body block border-4 border-nav h-7 nav-dot rounded-full selected-circle w-7'
							href='#'
						>
							<span className='bg-black ml-10 opacity-0 px-2 py-1 rounded-md '>
								Home
							</span>
						</a>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Hero;
