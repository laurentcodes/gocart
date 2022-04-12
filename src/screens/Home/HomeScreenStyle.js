import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const CardContainer = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Card = styled.div`
	width: 250px;
	height: 100px;
	background-color: ${colors.warning};
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;
	color: #fff;
	text-align: center;
	transition: all 0.3s ease-in-out;

	img {
		width: 50px;
	}

	&:hover {
		cursor: pointer;
		background-color: ${colors.brand};
	}
`;
