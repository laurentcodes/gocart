import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

// import BackArrow from '../../assets/icons/arrow/chevron_left.svg';

import {
	StatContainer,
	RiderTable,
	StyledAllRiders,
	EmptyRiders,
	Footer,
	TableContainer,
	StyledPagination,
} from './RiderScreenStyle';

import ListItem from './ListItem';

import { getAllRiders, getRiderStat } from '../../app/features/riderSlice';
import Loader from '../../components/Loader';

const RiderScreen = () => {
	// States for setting pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [ridersPerPage] = useState(10);

	const dispatch = useDispatch();

	const {
		riders,
		loading,
		stats: {
			total_count,
			verified_count,
			blocked_count,
			registered_today,
			registered_month,
		},
	} = useSelector((state) => state.rider);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	// Sort riders
	let ridersFromState = [...riders];

	const sortedRiders = ridersFromState.sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	const pageVisited = currentPage * ridersPerPage;
	const indexOfFirstRider = pageVisited - ridersPerPage;

	const displayedRiders = sortedRiders.slice(
		pageVisited,
		pageVisited + ridersPerPage
	);

	const noOfPages = Math.ceil(riders.length / ridersPerPage);

	useEffect(() => {
		dispatch(getRiderStat(authToken));
		dispatch(getAllRiders(authToken));
	}, [dispatch, authToken]);

	// Change page
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<StyledAllRiders>
			<>
				{loading ? (
					<Loader />
				) : riders.length < 1 ? (
					<EmptyRiders>No Riders yet!</EmptyRiders>
				) : (
					<>
						<StatContainer>
							<h3>Total Riders: {total_count}</h3>
							<h3>Verified: {verified_count}</h3>
							<h3>Blocked: {blocked_count}</h3>
							<h3>Registered Today: {registered_today}</h3>
							<h3>Registered This Month: {registered_month}</h3>
						</StatContainer>
						<TableContainer>
							<RiderTable>
								<thead>
									<tr>
										<th>Rider ID</th>
										<th>Username</th>
										<th>Email</th>
										<th>Joined</th>
									</tr>
								</thead>

								<tbody>
									{displayedRiders.map((rider) => (
										<ListItem key={rider._id} item={rider} />
									))}
								</tbody>
							</RiderTable>
						</TableContainer>
						{riders.length > 10 && (
							<Footer>
								{displayedRiders.length < ridersPerPage ? (
									<p>
										Showing {indexOfFirstRider + 11} to {riders.length} of{' '}
										{riders.length} items
									</p>
								) : (
									<p>
										Showing {indexOfFirstRider + 11} to {pageVisited + 10} of{' '}
										{riders.length} items
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
		</StyledAllRiders>
	);
};

export default RiderScreen;
