import React from 'react';

import { Container, Form } from './LoginScreenStyle';

import logo from '../../assets/images/logo.png';

const LoginScreen = () => {
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

					<button>SIGN IN</button>
				</Form>
			</Container>
		</div>
	);
};

export default LoginScreen;
