import React from 'react';
import MSULogo from '../../images/msulogo.png';

const About = () => {
	return (
		<section>
        
			<div className='space-y-12 my-16'>
				<div className='w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap'>
                <div class="mb-6 lg:mb-0">
                <img className='md:align-center' src={MSULogo} alt="Michigan State University Spartan Logo" />
                <p className='text-xl'>
							I am a graduate of Michigan State University's Coding Program.
						</p>
						</div>
					<h3 className='font-semibold text-white text-3xl'>About Me</h3>
					<div className='flex flex-wrap justify-center text-center lg:text-left lg:block'>
						<p>
							I design modern styled webpages, including both the front and back
							end coding. I also create interactive applications, develop
							servers and create databases for website functionality, and ensure
							all applications are mobile user friendly.
						</p>
							<h4 className='mt-4 text-2xl'>I have experience with</h4>
						<div className='w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8'>
							<div className='badge'>Co-operative programming</div>
							<div className='badge'>Front-End Development</div>
							<div className='badge'>Back-End Development</div>
							<div className='badge'>Full-Stack</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
