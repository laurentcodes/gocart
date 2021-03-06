import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const ScreenContainer = styled.div`
	overflow-x: hidden;
	margin-left: 200px;
	width: calc(100% - 200px);
	height: 100vh;

	@media (max-width: 576px) {
		padding: 2rem;
	}

	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

const Wrapper = styled.div`
	margin-top: 60px;
	height: calc(100% - 60px);
	overflow-y: hidden;
	background-color: ${colors.white};
`;

const Default = () => {
	return (
		<>
			<Sidebar />
			<ScreenContainer>
				<Navbar />
				<Wrapper>
					<Outlet />
				</Wrapper>
			</ScreenContainer>
		</>
	);
};

export default Default;
