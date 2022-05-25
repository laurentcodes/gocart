import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/Home/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import RiderScreen from './screens/Riders/RiderScreen';
import UserScreen from './screens/Users/UserScreen';
import OrderScreen from './screens/Orders/OrderScreen';
import UserDetailsScreen from './screens/Details/UserDetails/UserDetailScreen';
import RiderDetailsScreen from './screens/Details/RiderDetails/RiderDetailScreen';
import OrderDetailsScreen from './screens/Details/OrderDetails/OrderDetailScreen';

import PrivateRouter from './components/PrivateRouter';
import Default from './components/Default';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRouter>
								<Default />
							</PrivateRouter>
						}
					>
						<Route index element={<HomeScreen />} />
						<Route path='riders' element={<RiderScreen />} />
						<Route path='riders/:id' element={<RiderDetailsScreen />} />
						<Route path='users' element={<UserScreen />} />
						<Route path='users/:id' element={<UserDetailsScreen />} />
						<Route path='orders' element={<OrderScreen />} />
						<Route path='orders/:id' element={<OrderDetailsScreen />} />
					</Route>
					<Route path='/login' element={<LoginScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
