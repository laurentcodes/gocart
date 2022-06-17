import styled from 'styled-components';

export const AlertContainer = styled.div`
	background-color: ${(props) =>
		props.type === 'error' ? '#f44336' : '#4caf50'};
	color: #fff;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	position: relative;
	transition: all 0.3s ease-in-out;

	&::before {
		content: '';
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid
			${(props) => (props.type === 'error' ? '#f44336' : '#4caf50')};
	}
`;
