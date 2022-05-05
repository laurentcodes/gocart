import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../app/features/authSlice';

import { Nav } from './NavbarStyle';

import exit from '../../assets/icons/exit.svg';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { userName } = useSelector((state) => state.auth.userLogin);

	return (
		<Nav>
			<h3>
				GoCart Admin, <span>{userName}</span>
			</h3>

			<button
				onClick={() => {
					dispatch(logout());
					navigate('/login');
				}}
			>
				<img src={exit} alt='' />
			</button>
		</Nav>
	);
};

export default Navbar;
