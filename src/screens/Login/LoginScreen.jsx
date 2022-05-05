import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../app/features/authSlice';

import Loader from '../../components/Loader';

import { Container, Form } from './LoginScreenStyle';

import logo from '../../assets/images/logo.png';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const location = useLocation();

	const {
		loading,
		userLogin: { authToken },
	} = useSelector((state) => state.auth);

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
						<input
							type='text'
							placeholder='Username'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor='password'>Password</label>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type='button'
							aria-label='Increment value'
							onClick={() =>
								dispatch(
									loginUser({
										email,
										password,
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
