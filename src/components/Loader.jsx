import React from 'react';
import Spinner from '../assets/spinner.gif';
import styled from 'styled-components';

const Container = styled.div`
	/* background: rgba(0, 0, 0, 0.3); */
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 16;
`;

const Loader = () => {
	return (
		<>
			<Container>
				<img
					src={Spinner}
					alt='Loading...'
					style={{
						width: '150px',
						height: '150px',
						margin: 'auto',
						display: 'block',
						position: 'fixed',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
			</Container>
		</>
	);
};

export default Loader;
