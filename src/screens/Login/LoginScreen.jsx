import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../app/features/authSlice';

import { Container, Form } from './LoginScreenStyle';

import logo from '../../assets/images/logo.png';

const LoginScreen = () => {
	const dispatch = useDispatch();

	return (
		<div>
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
							dispatch(loginUser('eve.holt@reqres.in', 'cityslicka'))
						}
					>
						SIGN IN
					</button>
				</Form>
			</Container>
		</div>
	);
};

export default LoginScreen;
