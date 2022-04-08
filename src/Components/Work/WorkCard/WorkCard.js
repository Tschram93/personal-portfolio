import React from 'react';

const WorkCard = (props) => {
	return (
		<div className='border-solid border-2 border-secondary flex flex-col height-2 width-2'>
			WorkCard
			<div className='flex flex-col'>
				<div className='md:ml-2 ml-3'>
					<span className='flex justify-start'>Role <strong>:</strong></span>
                    <p className='md:my-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, animi?</p>
				</div>
				<div className='md:ml-2 ml-3'>
					<span className='flex justify-start'>Difficulties <strong>:</strong></span>
                    <p className='md:my-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, animi?</p>
				</div>
				<div className='md:ml-2 ml-3'>
					<span className='flex justify-start'>Solution <strong>:</strong></span>
                    <p className='md:my-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, animi?</p>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
