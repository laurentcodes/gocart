import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
	position: fixed;
	width: 250px;
	height: 100vh;
	background-color: ${colors.white};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-weight: 300;
	z-index: 1;

	.logo {
		margin-top: -40px;
	}

	@media (max-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
	}
`;

export const Nav = styled.ul`
	list-style-type: none;
	padding: 30px;
	margin-top: -50px;

	li {
		padding: 15px;
		transition: all 0.3s ease;
		font-size: 20px;
		transition: all 0.3s ease;

		&:hover {
			background-color: ${colors.background};
			cursor: pointer;
			color: ${colors.success};
		}
	}
`;
