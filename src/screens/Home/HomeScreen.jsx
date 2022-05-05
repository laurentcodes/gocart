import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllOrders } from '../../app/features/orderSlice';
import { getAllRiders } from '../../app/features/riderSlice';

import { Container, Card, CardContainer } from './HomeScreenStyle.js';

import Loader from '../../components/Loader';

import user from '../../assets/icons/group.svg';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const {
		orderCount,
		completedOrders,
		pendingOrders,
		loading: { orderLoading },
	} = useSelector((state) => state.order);
	const {
		riderCount,
		loading: { riderLoading },
	} = useSelector((state) => state.rider);
	const { authToken } = useSelector((state) => state.auth.userLogin);

	useEffect(() => {
		dispatch(getAllOrders(authToken));
	}, [dispatch, authToken]);

	return (
		<div>
			<Container>
				{orderLoading || riderLoading ? (
					<Loader />
				) : (
					<>
						<CardContainer>
							<Card>
								<img src={user} alt='' />
								<div>
									<h3>Users</h3>
									<h1>2000</h1>
								</div>
							</Card>
							<Card>
								<img src={user} alt='' />

								<div>
									<h3>Riders</h3>
									<h1>{riderCount}</h1>
								</div>
							</Card>
							<Card>
								<img src={user} alt='' />
								<div>
									<h3>Total Orders</h3>
									<h1>{orderCount}</h1>
								</div>
							</Card>
						</CardContainer>

						<CardContainer>
							<Card>
								<img src={user} alt='' />
								<div>
									<h3>In Progress</h3>
									<h1>{pendingOrders}</h1>
								</div>
							</Card>

							<Card>
								<img src={user} alt='' />
								<div>
									<h3>Completed Orders</h3>
									<h1>{completedOrders}</h1>
								</div>
							</Card>
						</CardContainer>
					</>
				)}
			</Container>
		</div>
	);
};

export default HomeScreen;
