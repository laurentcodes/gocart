import styled from 'styled-components';
import colors from '../../constants/colors';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	margin-bottom: 10%;

	h3 {
		p {
			display: inline;
			font-size: 18px;
			color: ${colors.brand};
		}
	}

	button {
		margin-top: 50px;
		width: 20%;
		background: ${colors.error};
		color: #fff;
		border: none;
		padding: 15px;
		border-radius: 5px;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			background: #fff;
			color: ${colors.error};
			border: 1px solid ${colors.error};
		}
	}
`;

export const Bio = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

export const BackButton = styled.button`
	margin-top: 50px;
	width: 20%;
	background: ${colors.brand};
	color: #fff;
	border: none;
	padding: 15px;
	border-radius: 5px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #fff;
		color: ${colors.brand};
		border: 1px solid ${colors.brand};
	}
`;
