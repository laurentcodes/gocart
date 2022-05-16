import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import orderReducer from './features/orderSlice';
import riderReducer from './features/riderSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
		rider: riderReducer,
		user: userReducer,
	},
});
