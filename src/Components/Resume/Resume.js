import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ResumePDF from '../../assets/Resume.pdf';

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offSet) {
		setPageNumber((prevPageNumber) => prevPageNumber + offSet);
	}

	function changePageBack() {
		changePage(-1);
	}

	function changePageNext() {
		changePage(+1);
	}

	return (
		<div>
			<span className='secondary-title' id='resume'>
				Resume
			</span>
			<div className='flex justify-center text-lg'>
				<Document
					id='resumeSizing'
					className='mt-6'
					file={ResumePDF}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page className='mt-0' pageNumber={pageNumber} />
					<p>
						Page {pageNumber} of {numPages}
					</p>
					{pageNumber > 1 && (
						<button
							className='bg-secondary rounded px-3 py-2'
							onClick={changePageBack}
						>
							Previous Page
						</button>
					)}
					{pageNumber < numPages && (
						<button
							className='bg-secondary mt-2 px-3 py-2 rounded'
							onClick={changePageNext}
						>
							Next Page
						</button>
					)}
				</Document>
			</div>
		</div>
	);
};

export default Resume;
