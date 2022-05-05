import styled from 'styled-components';

export const Nav = styled.div`
	position: fixed;
	width: 80%;
	height: 60px;
	background-color: #ffffff;
	display: flex;
	font-weight: 300;
	z-index: 1;
	padding: 0px 20px;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 20px;
		color: gray;
		margin: 0 10px;
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		img {
			width: 30px;
			height: 30px;
		}
	}
`;
