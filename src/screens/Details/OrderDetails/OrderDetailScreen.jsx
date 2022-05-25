import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getOrderById } from '../../../app/features/orderSlice';

import { formatISO } from '../../../util/date';

import Loader from '../../../components/Loader';

import {
	StyledContainer,
	UserInfo,
	Button,
	BackButton,
} from './OrderDetailScreenStyle';

const OrderDetailsScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const { order, loading } = useSelector((state) => state.order);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	useEffect(() => {
		dispatch(getOrderById({ id, authToken }));
	}, [dispatch, authToken, id]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<>
					<BackButton onClick={() => navigate('/orders')}>Back</BackButton>

					<StyledContainer>
						<h3>
							Order ID: <p>{order.order_id}</p>
						</h3>
						<h3>
							User ID: <p>{order.user_id}</p>
						</h3>
						<h3>
							Rider ID: <p>{order.rider_id}</p>
						</h3>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Status:
							<p
								style={{
									marginLeft: '5px',
									color: `${
										order.status === 'SUCCESS'
											? '#339900'
												? order.status === 'FAILED'
												: '#cc3300'
											: '#ffcc00'
									}`,
								}}
							>
								{order.status}
							</p>
						</h3>

						<UserInfo>
							<h3>
								Recipient Name: <p>{order.recipient_name}</p>
							</h3>
							<h3>
								Delivery Address: <p>{order.delivery_address}</p>
							</h3>
							<h3>
								Recipent Phone: <p>{order.recipient_phone}</p>
							</h3>
							<h3>
								Coordinates:
								<p style={{ marginLeft: '10px' }}>
									lng: {order.lnglat && order.lnglat.lng}, lat:
									{order.lnglat && order.lnglat.lat}
								</p>
							</h3>
						</UserInfo>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Created: <p>{formatISO(order.createdAt)}</p>
						</h3>
					</StyledContainer>
				</>
			)}
		</div>
	);
};

export default OrderDetailsScreen;
