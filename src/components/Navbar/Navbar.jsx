import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../app/features/authSlice';

import { Nav } from './NavbarStyle';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<Nav>
			<h3>GoCart</h3>

			<button
				onClick={() => {
					dispatch(logout());
					navigate('/login');
				}}
			>
				Logout
			</button>
		</Nav>
	);
};

export default Navbar;
