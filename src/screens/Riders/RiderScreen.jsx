import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ReactPaginate from 'react-paginate';

// import BackArrow from '../../assets/icons/arrow/chevron_left.svg';

import {
	BackButton,
	FeedbackTable,
	StyledAllFeedbacks,
	EmptyFeedback,
	Footer,
	TableContainer,
	StyledPagination,
} from './RiderScreenStyle';

import ListItem from './ListItem';

const RiderScreen = () => {
	// States for setting pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [feedbacksPerPage] = useState(10);

	const feedbacks = [
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
		{
			first_name: 'Segun',
			last_name: 'Olagunju',
			email: 'o.sherkes@gmail.com',
			deliveries: 10,
		},
	];

	// Sort feedbacks
	const sortedFeeds = feedbacks.sort(
		(a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
	);

	const pageVisited = currentPage * feedbacksPerPage;
	const indexOfFirstFeedback = pageVisited - feedbacksPerPage;

	const displayedFeedbacks = sortedFeeds.slice(
		pageVisited,
		pageVisited + feedbacksPerPage
	);

	const noOfPages = Math.ceil(feedbacks.length / feedbacksPerPage);

	useEffect(() => {}, []);

	// Change page
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<StyledAllFeedbacks>
			<>
				{feedbacks.length < 1 ? (
					<EmptyFeedback>No Riders yet!</EmptyFeedback>
				) : (
					<>
						<TableContainer>
							<FeedbackTable>
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Deliveries</th>
									</tr>
								</thead>

								<tbody>
									{displayedFeedbacks.map((feedback) => (
										<ListItem key={feedback._id} feedback={feedback} />
									))}
								</tbody>
							</FeedbackTable>
						</TableContainer>

						{feedbacks.length > 10 && (
							<Footer>
								{displayedFeedbacks.length < feedbacksPerPage ? (
									<p>
										Showing {indexOfFirstFeedback + 11} to {feedbacks.length} of{' '}
										{feedbacks.length} items
									</p>
								) : (
									<p>
										Showing {indexOfFirstFeedback + 11} to {pageVisited + 10} of{' '}
										{feedbacks.length} items
									</p>
								)}

								<StyledPagination>
									<ReactPaginate
										previousLabel='Previous'
										nextLabel='Next'
										pageCount={noOfPages}
										onPageChange={changePage}
										containerClassName='paginationBtns'
										previousLinkClassName='previousBtn'
										nextLinkClassName='nextBtn'
										disabledClassName='paginationDisabled'
										activeClassName='paginationActive'
										pageRangeDisplayed={5}
										marginPagesDisplayed={0}
										breakLabel={''}
									/>
								</StyledPagination>
							</Footer>
						)}
					</>
				)}
			</>
		</StyledAllFeedbacks>
	);
};

export default RiderScreen;
