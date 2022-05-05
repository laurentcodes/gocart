import React from 'react';
import colors from '../../constants/colors';

import { NavLink } from 'react-router-dom';

import { Container, Nav } from './SidebarStyle.js';

import logo from '../../assets/images/logo.png';

const Sidebar = () => {
	return (
		<Container>
			<img className='logo' src={logo} alt='GoCart Logo' />

			<Nav>
				<NavLink
					to='/'
					style={({ isActive }) => ({
						color: isActive ? `${colors.success}` : `${colors.brand}`,
						textDecoration: 'none',
					})}
				>
					<li>Home</li>
				</NavLink>

				<NavLink
					to='/users'
					style={({ isActive }) => ({
						color: isActive ? `${colors.success}` : `${colors.brand}`,
						textDecoration: 'none',
					})}
				>
					<li>Users</li>
				</NavLink>

				<NavLink
					to='/riders'
					style={({ isActive }) => ({
						color: isActive ? `${colors.success}` : `${colors.brand}`,
						textDecoration: 'none',
					})}
				>
					<li>Riders</li>
				</NavLink>

				<NavLink
					to='/orders'
					style={({ isActive }) => ({
						color: isActive ? `${colors.success}` : `${colors.brand}`,
						textDecoration: 'none',
					})}
				>
					<li>Orders</li>
				</NavLink>
			</Nav>
		</Container>
	);
};

export default Sidebar;
