import React from 'react';
import ColorPicking from '../../images/colorpicking.avif';
import DesignImage from '../../images/designimage.avif';
import ECommerce from '../../images/ecommerce.avif';
import MobileTesting from '../../images/mobiletesting.avif';
import ProgressImage from '../../images/progressimage.avif';
import TabletDesign from '../../images/tabletdesign.avif';
import WorkCard from './WorkCard/WorkCard';
import UIDesign from '../../images/uidesign.avif';

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
							'We realized that we had used a dated version of React that could potentially cause issues in the future.'
						}
						github={'https://github.com/MiguelGarciaCastro/MiDoggApp'}
						livePage={'https://midoggapp.herokuapp.com/'}
						picture={ColorPicking}
						role={'I was tasked with gathering reliable resources for multiple activities. I was to then turn the raw data from them into the appropriate React components.'}
						solutionText={
							'I referred to the official React documentation and updated a variety of things. As I was doing this, I was communicating with the other members of this app development team what I was doing, along with what had been changed before any pushes, pulls or merges.'
						}
						titleText={'MI Dog App'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github={'https://github.com/maxaeon/project-2'}
						livePage={'https://chicken-running.herokuapp.com/'}
						picture={DesignImage}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Garden Manager'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github={'https://github.com/letqin/space-in-your-face'}
						livePage={'https://letqin.github.io/space-in-your-face/'}
						picture={UIDesign}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Space Tracker'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github={'https://github.com/Tschram93/book-search'}
						livePage={'https://book-search-ts93.herokuapp.com/'}
						picture={ProgressImage}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Book Search'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github={'https://github.com/Tschram93/fitness-tracker'}
						livePage={'https://fitness-tracker-ts93.herokuapp.com/'}
						picture={MobileTesting}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Fitness Tracker'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github={'https://github.com/Tschram93/password-generator'}
						livePage={'https://tschram93.github.io/password-generator/'}
						picture={ECommerce}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Password Generator'}
					/>
				</div>
			</section>
		</div>
	);
};

export default Work;
