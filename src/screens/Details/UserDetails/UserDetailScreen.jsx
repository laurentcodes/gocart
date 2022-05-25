import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
	getUserById,
	blockUser,
	unblockUser,
} from '../../../app/features/userSlice';

import { formatISO } from '../../../util/date';

import Loader from '../../../components/Loader';

import {
	StyledContainer,
	Bio,
	Button,
	BackButton,
} from './UserDetailScreenStyle';

const UserDetailsScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const { user, loading, userBlocked } = useSelector((state) => state.user);

	const { authToken } = useSelector((state) => state.auth.userLogin);

	useEffect(() => {
		dispatch(getUserById({ id, authToken }));
	}, [dispatch, authToken, id, userBlocked]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<>
					<BackButton onClick={() => navigate('/users')}>Back</BackButton>

					<StyledContainer>
						<h3>
							User ID: <p>{user.user_id}</p>
						</h3>
						<h3>
							Username: <p>{user.username}</p>
						</h3>

						<Bio>
							<h3>
								First Name: <p>{user.firstname}</p>
							</h3>
							<h3>
								Last Name: <p>{user.lastname}</p>
							</h3>
							<h3>
								Email: <p>{user.email}</p>
							</h3>
						</Bio>

						<h3
							style={{
								marginTop: '20px',
							}}
						>
							Joined: <p>{formatISO(user.createdAt)}</p>
						</h3>

						<Button
							onClick={() => {
								user.blocked
									? dispatch(unblockUser({ id, authToken }))
									: dispatch(blockUser({ id, authToken }));
							}}
							blocked={user.blocked}
						>
							{user.blocked ? 'Unblock' : 'Block'}
						</Button>
					</StyledContainer>
				</>
			)}
		</div>
	);
};

export default UserDetailsScreen;
