import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
	getRiderById,
	blockRider,
	unblockRider,
} from '../../../app/features/riderSlice';

import { formatISO } from '../../../util/date';

import Loader from '../../../components/Loader';

import {
	StyledContainer,
	Bio,
	Button,
	BackButton,
} from './RiderDetailScreenStyle';

const RiderDetailsScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const { rider, loading, riderBlocked } = useSelector((state) => state.rider);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	useEffect(() => {
		dispatch(getRiderById({ id, authToken }));
	}, [dispatch, authToken, id, riderBlocked]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<>
					<BackButton onClick={() => navigate('/riders')}>Back</BackButton>

					<StyledContainer>
						<h3>
							Username: <p>{rider.username}</p>
						</h3>

						<Bio>
							<h3>
								First Name: <p>{rider.firstname}</p>
							</h3>
							<h3>
								Last Name: <p>{rider.lastname}</p>
							</h3>
							<h3>
								Email: <p>{rider.email}</p>
							</h3>
						</Bio>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Address: <p>{rider.address}</p>
						</h3>
						<h3>
							Coordinates:
							<p style={{ marginLeft: '10px' }}>
								lng: {rider.lnglat && rider.lnglat.lng}, lat:
								{rider.lnglat && rider.lnglat.lat}
							</p>
						</h3>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Plate Number:{' '}
							<p>{rider.plate_number && rider.plate_number.toUpperCase()}</p>
						</h3>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Referrals: <p>{rider.referrals}</p>
						</h3>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Joined: <p>{formatISO(rider.createdAt)}</p>{' '}
						</h3>

						<Button
							onClick={() => {
								rider.blocked
									? dispatch(unblockRider({ id, authToken }))
									: dispatch(blockRider({ id, authToken }));
							}}
							blocked={rider.blocked}
						>
							{rider.blocked ? 'Unblock' : 'Block'}
						</Button>
					</StyledContainer>
				</>
			)}
		</div>
	);
};

export default RiderDetailsScreen;
