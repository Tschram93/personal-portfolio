import React from 'react';

const WorkCard = (props) => {
	return (
		// Whole Card
		<div className='border border-4 flex flex-col justify-around p-3 rounded-lg border-secondary'>
			<div className='flex w-full'>
				{/* Top section & img  */}
				<img
					src={props.picture}
					className='border-2 border-badge md:border-1 w-full bg-nav h-36 lg:h-72 object-cover'
					alt='progress of application design'
				/>
			</div>
			{/*Live page & repo button links */}
			<div className='flex justify-around mt-2'>
				<button className='bg-theme py-1 px-2 rounded-md'>
					<a href={props.github}>Code</a>
				</button>
				<button className='bg-theme py-1 px-2 rounded-md'>
					<a href={props.livePage}>Application</a>
				</button>
			</div>
			{/* Info section */}
			<div className='flex flex-col border-t-2 border-nav md:mt2 mt-3'>
				<span className='text-xl font-bold mt-2'>{props.titleText}</span>
				<div className='flex flex-wrap md:ml-2 ml-3 mt-2'>
					<span className='flex justify-center'>
						<strong className='text-selected-text'>Role:</strong>
					</span>
					<p className=' flex items-start md:my-2 my-1'>{props.role}</p>
				</div>
				<div className='flex flex-wrap md:ml-2 ml-3'>
					<span className='flex justify-center'>
						<strong className='text-selected-text'>Difficulties:</strong>
					</span>
					<p className=' flex items-start md:my-2 my-1'>
						{props.difficultyText}
					</p>
				</div>
				<div className='flex flex-wrap md:ml-2 ml-3'>
					<span className='flex justify-center'>
						<strong className='text-selected-text'>Solution:</strong>
					</span>
					<p className=' flex items-start md:my-2 my-1'>{props.solutionText}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
