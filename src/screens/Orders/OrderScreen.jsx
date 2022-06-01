import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import {
	StatContainer,
	OrderTable,
	StyledAllOrders,
	EmptyOrders,
	Footer,
	TableContainer,
	StyledPagination,
} from './OrderScreenStyle';

import Loader from '../../components/Loader';

import ListItem from './ListItem';

import { getAllOrders, getOrdersStat } from '../../app/features/orderSlice';

const OrderScreen = () => {
	// States for setting pagination
	const [currentPage, setCurrentPage] = useState(0);
	const [ordersPerPage] = useState(10);

	const dispatch = useDispatch();

	const {
		orders,
		loading,
		stats: {
			total_count,
			pending_count,
			completed_count,
			failed_count,
			ordered_today,
			ordered_month,
		},
	} = useSelector((state) => state.order);

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
		dispatch(getOrdersStat(authToken));
		dispatch(getAllOrders(authToken));
	}, [dispatch, authToken]);

	// Change page
	const changePage = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<StyledAllOrders>
			<>
				{loading ? (
					<Loader />
				) : orders.length < 1 ? (
					<EmptyOrders>No Orders yet!</EmptyOrders>
				) : (
					<>
						<StatContainer>
							<h3>Total Orders: {total_count}</h3>
							<h3>Pending Orders: {pending_count}</h3>
							<h3>Completed Orders: {completed_count}</h3>
							<h3>Failed Orders: {failed_count}</h3>
							<h3>Orders Today: {ordered_month}</h3>
							<h3>Orders This Month: {ordered_month}</h3>
						</StatContainer>
						<TableContainer>
							<OrderTable>
								<thead>
									<tr>
										<th>Order ID</th>
										<th>User ID</th>
										<th>Status</th>
										<th>Date</th>
									</tr>
								</thead>

								<tbody>
									{displayedUsers.map((order) => (
										<ListItem key={order._id} item={order} />
									))}
								</tbody>
							</OrderTable>
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
		</StyledAllOrders>
	);
};

export default OrderScreen;
