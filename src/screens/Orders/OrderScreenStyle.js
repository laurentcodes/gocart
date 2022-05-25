import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../constants/colors';

export const StyledAllOrders = styled.div`
	font-size: 14px;
	color: ${colors.body};
	padding: 30px;
`;

export const TableContainer = styled.div`
	overflow-x: scroll;
`;

export const OrderTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	resize: both;
	overflow: auto;

	thead {
		tr {
			background: ${colors.brand};
			color: #fff;
		}
	}

	td {
		border-bottom: 0.5px solid rgb(243, 240, 240);
		padding: 10px;
	}

	th {
		padding: 12px;
		text-align: left;
	}
`;

export const FlexWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	p {
		padding-left: 12px;
	}
`;

export const EmptyOrders = styled.div`
	margin-top: 10%;
	text-align: center;

	@media (max-width: 576px) {
		margin-top: 40%;
	}
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;

	p {
		padding-right: 20px;
	}

	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const StyledPagination = styled.nav`
	padding: 10px;

	.paginationBtns {
		list-style-type: none;
		display: flex;

		a {
			border: 1px solid ${colors.line};
			border-radius: 10px;
			margin: 2px;
			padding: 8px 13px;
			background-color: #fff;
			transition: all 0.2s ease-in-out;

			&:hover {
				cursor: pointer;
				border: 1px solid ${colors.brand};
				background-color: ${colors.brand};
				color: #fff;
			}

			@media (max-width: 576px) {
				padding: 4px 8px;
			}
		}

		.previousBtn {
			background: inherit;
			border: none;
			padding: 8px 13px;

			&:hover {
				cursor: pointer;
				border: none;
				color: inherit;
				background: inherit;
			}

			@media (max-width: 768px) {
				background: red;
			}

			@media (max-width: 576px) {
				padding: 5px 0;
			}
		}

		.nextBtn {
			background: inherit;
			border: none;
			padding: 8px 13px;

			&:hover {
				cursor: pointer;
				border: none;
				color: inherit;
				background: inherit;
			}

			@media (max-width: 576px) {
				padding: 5px 0;
			}
		}
	}

	.paginationActive a {
		background-color: ${colors.brand};
		border: 1px solid ${colors.brand};
		color: ${colors.white};
	}

	.paginationDisabled {
		color: #b4b4b4;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.body};
	font-size: 14px;
	font-weight: 600;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: ${colors.brand};
	}
`;
