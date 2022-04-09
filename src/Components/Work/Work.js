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
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={ColorPicking}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={DesignImage}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={UIDesign}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={ProgressImage}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={MobileTesting}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
					<WorkCard
						difficultyText={
							'Description of something that was difficult to accomplish about this.'
						}
						github=''
						livePage=''
						picture={ECommerce}
						role={'This is the role I filled to complete this application.'}
						solutionText={
							'I read documentation and did _____ to make this work.'
						}
						titleText={'Application Name'}
					/>
				</div>
			</section>
		</div>
	);
};

export default Work;
