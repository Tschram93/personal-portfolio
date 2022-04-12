import React from 'react';
import ColorPicking from '../../images/colorpicking.jpg';
import DesignImage from '../../images/designimage.jpg';
import ECommerce from '../../images/ecommerce.jpg';
import MobileTesting from '../../images/mobiletesting.jpg';
import ProgressImage from '../../images/progressimage.jpg';
import TabletDesign from '../../images/tabletdesign.jpg';
import WorkCard from './WorkCard/WorkCard';
import UIDesign from '../../images/uidesign.jpg';

const Work = () => {
	return (
		<div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
			<section className='w-full'>
				<h2 id='projects' className='secondary-title'>
					My Projects
				</h2>
				<p className='section-paragraph'>
					I’ve had the pleasure of working on multiple projects, designing and
					implementing both frontend and backend.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
					<WorkCard
						difficultyText={
							'We had used a dated version of React that could potentially cause issues in the future.'
						}
						github={'https://github.com/MiguelGarciaCastro/MiDoggApp'}
						livePage={'https://midoggapp.herokuapp.com/'}
						picture={TabletDesign}
						role={
							'Gather reliable resources for multiple activities. I was to then turn the raw data from them into the appropriate React components.'
						}
						solutionText={
							'Used the official React documentation and updated a variety of things. I made sure to communicate with the other members of this app development team what I had done, along with what had been changed before any merges.'
						}
						titleText={'MI Dog App'}
					/>
					<WorkCard
						difficultyText={`I was unfamiliar with "Handlebars.mustache" templates and templating languages.`}
						github={'https://github.com/maxaeon/project-2'}
						livePage={'https://chicken-running.herokuapp.com/'}
						picture={DesignImage}
						role={
							'Front-End: I was to incorporate a weather API to display accurate weather information for locations based on text search.'
						}
						solutionText={
							'I decided to create a sandbox environment in order to attempt a draft version. I followed the documentation for HandleBars.js more dynamic and responsive app development.'
						}
						titleText={'Garden Manager'}
					/>
					<WorkCard
						difficultyText={`NASA uses multiple sources, their api doesn't use a consistently universal format or fields. The GPS tracker for the I.S.S was a typical pin-point icon, changing the pointer into another icon.`}
						github={'https://github.com/letqin/space-in-your-face'}
						livePage={'https://letqin.github.io/space-in-your-face/'}
						picture={UIDesign}
						role={`Collaborate with team members to use multiple server-side APIs into a single application`}
						solutionText={`I had found a software development community and asked for suggestions after updating on things I had tried. I followed tutorials and adapted them to suit the project and it's needs.`}
						titleText={'Space Tracker'}
					/>
					<WorkCard
						difficultyText={
							'The most difficult portion was to get the application to deploy successfully.'
						}
						github={'https://github.com/Tschram93/book-search'}
						livePage={'https://book-search-ts93.herokuapp.com/'}
						picture={ProgressImage}
						role={'Set up a server to fetch, modify and change existing data in a RESTful API. Deploy the application using MongoDB.'}
						solutionText={
							'I had to troubleshoot and go through a checklist of common issues. I changed permissions and settings in MongoDB and linked it to the host provider to successfully launch.'
						}
						titleText={'Book Search'}
					/>
					<WorkCard
						difficultyText={`Getting the entered information from multiple pages to one location and display it.`}
						github={'https://github.com/Tschram93/fitness-tracker'}
						livePage={'https://fitness-tracker-ts93.herokuapp.com/'}
						picture={MobileTesting}
						role={`To create and track daily workouts. With the ability to log multiple exercises in a workout on a given day. It should also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, it will track my distance traveled.`}
						solutionText={
							`I followed the mongo database guide documents step by step, adjusting the information as I progressed.`
						}
						titleText={'Fitness Tracker'}
					/>
					<WorkCard
						difficultyText={`Using regular expressions (regex) to correctly implement and require the correct characters.`
						}
						github={'https://github.com/Tschram93/password-generator'}
						livePage={'https://tschram93.github.io/password-generator/'}
						picture={ECommerce}
						role={`Create a random generated password that meets certain user selected criteria.Including: Uppercase, lowercase, special characters, and length of password`}
						solutionText={`I used many regular expression articles to take notes and write out expressions that I desired.`
						}
						titleText={'Password Generator'}
					/>
				</div>
			</section>
		</div>
	);
};

export default Work;
