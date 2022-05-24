import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import {
	FeedbackTable,
	StyledAllFeedbacks,
	EmptyFeedback,
	Footer,
	TableContainer,
	StyledPagination,
} from './OrderScreenStyle';

import Loader from '../../components/Loader';

import ListItem from './ListItem';

import { getAllOrders } from '../../app/features/orderSlice';

const OrderScreen = () => {
	// States for setting pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [ordersPerPage] = useState(10);

	const dispatch = useDispatch();

	const { orders, loading } = useSelector((state) => state.order);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	// Sort feedbacks
	let ordersFromState = [...orders];

	const sortedOrders = ordersFromState.sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	const pageVisited = currentPage * ordersPerPage;
	const indexOfFirstOrder = pageVisited - ordersPerPage;

	const displayedUsers = sortedOrders.slice(
		pageVisited,
		pageVisited + ordersPerPage
	);

	const noOfPages = Math.ceil(orders.length / ordersPerPage);

	useEffect(() => {
		dispatch(getAllOrders(authToken));
	}, [dispatch, authToken]);

	// Change page
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<StyledAllFeedbacks>
			<>
				{loading ? (
					<Loader />
				) : orders.length < 1 ? (
					<EmptyFeedback>No Orders yet!</EmptyFeedback>
				) : (
					<>
						<TableContainer>
							<FeedbackTable>
								<thead>
									<tr>
										<th>User ID</th>
										<th>Order ID</th>
										<th>Status</th>
										<th>Date</th>
									</tr>
								</thead>

								<tbody>
									{displayedUsers.map((order) => (
										<ListItem key={order._id} item={order} />
									))}
								</tbody>
							</FeedbackTable>
						</TableContainer>

						{orders.length > 10 && (
							<Footer>
								{displayedUsers.length < ordersPerPage ? (
									<p>
										Showing {indexOfFirstOrder + 11} to {orders.length} of
										{orders.length} items
									</p>
								) : (
									<p>
										Showing {indexOfFirstOrder + 11} to {pageVisited + 10} of
										{orders.length} items
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

export default OrderScreen;
