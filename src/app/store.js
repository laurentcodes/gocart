import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import orderReducer from './features/orderSlice';
import riderReducer from './features/riderSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		order: orderReducer,
		rider: riderReducer,
	},
});
