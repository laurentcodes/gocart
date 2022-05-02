import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../app/features/authSlice';

import Loader from '../../components/Loader';

import { Container, Form } from './LoginScreenStyle';

import logo from '../../assets/images/logo.png';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const loading = useSelector((state) => state.auth.loading);
	const authToken = useSelector((state) => state.auth.userLogin.authToken);

	const redirectPath = location.state?.path || '/';

	if (authToken) {
		return <Navigate to={redirectPath} replace />;
	}

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<Container>
					<img src={logo} alt='' />

					<h2>Sign In</h2>
					<Form>
						<label htmlFor='username'>Username</label>
						<input type='text' placeholder='Username' />

						<label htmlFor='password'>Password</label>
						<input type='password' placeholder='Password' />

						<button
							type='button'
							aria-label='Increment value'
							onClick={() =>
								dispatch(
									loginUser({
										email: 'eve.holt@reqres.in',
										password: 'cityslicka',
									})
								)
							}
						>
							SIGN IN
						</button>
					</Form>
				</Container>
			)}
		</div>
	);
};

export default LoginScreen;
