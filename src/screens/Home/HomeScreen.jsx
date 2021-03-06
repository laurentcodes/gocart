import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getOrdersStat } from '../../app/features/orderSlice';
import { getRiderStat } from '../../app/features/riderSlice';
import { getUsersStat } from '../../app/features/userSlice';

import { Container, Card, CardContainer } from './HomeScreenStyle.js';

import Loader from '../../components/Loader';

import user from '../../assets/icons/group.svg';
import deliverySuccess from '../../assets/icons/delivery_success.svg';
import deliveryFailed from '../../assets/icons/delivery_failed.svg';
import totalCount from '../../assets/icons/total_count.svg';
import progress from '../../assets/icons/progress.svg';

const HomeScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		stats: {
			total_count: totalOrders,
			pending_count: pendingOrders,
			completed_count: completedOrders,
			failed_count: failedOrders,
		},
		loading: orderLoading,
	} = useSelector((state) => state.order);

	const {
		stats: { total_count: totalUsers },
		loading: userLoading,
	} = useSelector((state) => state.user);

	const {
		stats: { total_count: totalRiders },
		loading: riderLoading,
	} = useSelector((state) => state.rider);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	useEffect(() => {
		dispatch(getOrdersStat(authToken));
		dispatch(getRiderStat(authToken));
		dispatch(getUsersStat(authToken));
	}, [dispatch, authToken]);

	return (
		<div>
			<Container>
				{orderLoading || riderLoading || userLoading ? (
					<Loader />
				) : (
					<>
						<CardContainer>
							<Card
								onClick={() => {
									navigate('users');
								}}
							>
								<img src={user} alt='' />
								<div>
									<h3>Users</h3>
									<h1>{totalUsers}</h1>
								</div>
							</Card>
							<Card
								onClick={() => {
									navigate('riders');
								}}
							>
								<img src={user} alt='' />

								<div>
									<h3>Riders</h3>
									<h1>{totalRiders}</h1>
								</div>
							</Card>
							<Card
								onClick={() => {
									navigate('orders');
								}}
							>
								<img src={totalCount} alt='' />
								<div>
									<h3>Total Orders</h3>
									<h1>{totalOrders}</h1>
								</div>
							</Card>
						</CardContainer>

						<CardContainer>
							<Card
								onClick={() => {
									navigate('orders');
								}}
							>
								<img src={progress} alt='' />
								<div>
									<h3>In Progress</h3>
									<h1>{pendingOrders}</h1>
								</div>
							</Card>

							<Card
								onClick={() => {
									navigate('orders');
								}}
							>
								<img src={deliverySuccess} alt='' />
								<div>
									<h3>Completed Orders</h3>
									<h1>{completedOrders}</h1>
								</div>
							</Card>

							<Card
								onClick={() => {
									navigate('orders');
								}}
							>
								<img src={deliveryFailed} alt='' />
								<div>
									<h3>Failed Orders</h3>
									<h1>{failedOrders}</h1>
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
