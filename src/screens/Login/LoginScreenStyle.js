import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #fff;
	overflow: hidden;

	img {
    margin-top: -50px;
		width: 200px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 350px;
	margin-top: 20px;

	input {
		width: 100%;
		height: 40px;
		border-radius: 4px;
		border: 1px solid #d9dbe9;
		padding: 0 15px;
		margin: 10px 0;
		transition: all 0.2s;

		&:focus {
			border: 1px solid ${colors.brand};
			outline: none;
		}
	}

	button {
		width: 45%;
		height: 45px;
		border-radius: 4px;
		border: 0;
		background-color: ${colors.brand};
		color: #fff;
		font-weight: bold;
		margin: 10px 0;
		cursor: pointer;
		letter-spacing: 0.5px;
		transition: all 0.2s ease;

		&:hover {
			background-color: #fff;
			color: ${colors.brand};
			border: 1px solid ${colors.brand};
		}
	}
`;
