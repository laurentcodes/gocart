import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import colors from './constants/colors';

import HomeScreen from './screens/Home/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import RiderScreen from './screens/Riders/RiderScreen';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

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
	background-color: ${colors.background};
`;

const App = () => {
	const userInfo = true;

	return (
		<>
			{userInfo ? (
				<BrowserRouter>
					<Sidebar />
					<ScreenContainer>
						<Navbar />
						<Wrapper>
							<Routes>
								<Route path='/' exact element={<HomeScreen />} />
								<Route path='/riders' element={<RiderScreen />} />
							</Routes>
						</Wrapper>
					</ScreenContainer>
				</BrowserRouter>
			) : (
				<>
					<BrowserRouter>
						<Routes>
							<Route path='/login' element={<LoginScreen />} />
						</Routes>
					</BrowserRouter>
				</>
			)}
		</>
	);
};

export default App;
