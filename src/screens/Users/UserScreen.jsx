import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import {
	StatContainer,
	UserTable,
	StyledAllUsers,
	EmptyUser,
	Footer,
	TableContainer,
	StyledPagination,
} from './UserScreenStyle';

import Loader from '../../components/Loader';

import ListItem from './ListItem';

import { getUsersStat, getAllUsers } from '../../app/features/userSlice';

const UserScreen = () => {
	// States for setting pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [usersPerPage] = useState(10);

	const dispatch = useDispatch();

	const {
		users,
		loading,
		stats: {
			total_count,
			verified_count,
			blocked_count,
			registered_today,
			registered_month,
		},
	} = useSelector((state) => state.user);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	// Sort feedbacks
	let usersFromState = [...users];

	const sortedUsers = usersFromState.sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	const pageVisited = currentPage * usersPerPage;
	const indexOfFirstUser = pageVisited - usersPerPage;

	const displayedUsers = sortedUsers.slice(
		pageVisited,
		pageVisited + usersPerPage
	);

	const noOfPages = Math.ceil(users.length / usersPerPage);

	useEffect(() => {
		dispatch(getUsersStat(authToken));
		dispatch(getAllUsers(authToken));
	}, [dispatch, authToken]);

	// Change page
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<StyledAllUsers>
			<>
				{loading ? (
					<Loader />
				) : users.length < 1 ? (
					<EmptyUser>No Users yet!</EmptyUser>
				) : (
					<>
						<StatContainer>
							<h3>Total Users: {total_count}</h3>
							<h3>Verified: {verified_count}</h3>
							<h3>Blocked: {blocked_count}</h3>
							<h3>Registered Today: {registered_today}</h3>
							<h3>Registered This Month: {registered_month}</h3>
						</StatContainer>
						<TableContainer>
							<UserTable>
								<thead>
									<tr>
										<th>User ID</th>
										<th>Username</th>
										<th>Joined</th>
									</tr>
								</thead>

								<tbody>
									{displayedUsers.map((user) => (
										<ListItem key={user._id} item={user} />
									))}
								</tbody>
							</UserTable>
						</TableContainer>

						{users.length > 10 && (
							<Footer>
								{displayedUsers.length < usersPerPage ? (
									<p>
										Showing {indexOfFirstUser + 11} to {users.length} of
										{users.length} items
									</p>
								) : (
									<p>
										Showing {indexOfFirstUser + 11} to {pageVisited + 10} of
										{users.length} items
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
		</StyledAllUsers>
	);
};

export default UserScreen;
