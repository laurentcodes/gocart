import React from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../../app/features/authSlice';

import { Nav } from './NavbarStyle';

const Navbar = () => {
	const dispatch = useDispatch();
	return (
		<Nav>
			<h3>GoCart</h3>

			<button onClick={() => dispatch(logout())}>Logout</button>
		</Nav>
	);
};

export default Navbar;
