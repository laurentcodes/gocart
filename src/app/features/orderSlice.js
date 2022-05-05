import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	orders: [],
	orderCount: 0,
	completedOrders: 0,
	pendingOrders: 0,
	loading: false,
	error: null,
};

export const getAllOrders = createAsyncThunk(
	'order/getAll',
	async (token, { rejectWithValue }) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get(
			'https://gocartsapp.herokuapp.com/admin/orders',
			config
		);

		return data.data;
	}
);

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllOrders.pending]: (state, action) => {
			state.loading = true;
		},
		[getAllOrders.fulfilled]: (state, action) => {
			state.orders = action.payload;
			state.orderCount = action.payload.length;
			state.completedOrders = action.payload.filter(
				(order) => order.status === 'COMPLETED'
			).length;
			state.pendingOrders = action.payload.filter(
				(order) => order.status === 'PENDING'
			).length;
			state.loading = false;
		},
		[getAllOrders.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
