import React, { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import * as FaIcons from 'react-icons/fa';

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_1ytsw5e',
				'template_sfcbbja',
				formRef.current,
				'user_FcuCFvga5RgftWtJuVMrg'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
			<section className='w-full'>
				<h2 id='contact' className='secondary-title'>
					Contact me
				</h2>
				<p className='section-paragraph'>
					Feel free to to contact me any time, through any of the following.
				</p>

				<div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24'>
					<form className='space-y-12' ref={formRef} onSubmit={handleSubmit}>
						<div>
							<label className='text-white block mb-6 text-xl font-bold'>
								Name
							</label>
							<input
								className='w-full border border-input-border bg-input px-4 py-4'
								name='name'
								type='text'
							/>
						</div>
						<div>
							<label className='text-white block mb-6 text-xl font-bold'>
								Email
							</label>
							<input
								name='email'
								type='email'
								className='w-full border border-input-border bg-input px-4 py-4'
							/>
						</div>
						<div>
							<label
								className='text-white block mb-6 text-xl font-bold'
								name='message'
								type='text'
							>
								Message
							</label>
							<textarea
								type='email'
								className='w-full border border-input-border bg-input px-4 py-4 h-56 resize-none'
							></textarea>
						</div>
						<button className='px-6 py-2 bg-theme text-white font-bold'>
							Send it!
						</button>
						{done && 'Thank you for your interest!'}
					</form>

					<div className='mt-12'>
						{/* <!-- Contact info --> */}
						<p className='text-secondary'>989-284-2576</p>
						<a
							href='mailto:TSchram93.dev@gmail.com'
							className='justify-center text-secondary underline mt-3 block'
						>
							TSchram93.dev@gmail.com
						</a>
						<div className='flex justify-center sm:text-2xl mt-20 space-x-6 text-4xl'>
							<a href=''>
								<FaIcons.FaSlack />
							</a>
							<a href='https://www.linkedin.com/in/travis-schram-a37727217/'>
								<FaIcons.FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
