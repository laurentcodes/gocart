import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_API_URL;

const initialState = {
	orders: [],
	order: {},
	orderCount: 0,
	completedOrders: 0,
	pendingOrders: 0,
	loading: false,
	error: null,
};

// GET ALL ORDERS
export const getAllOrders = createAsyncThunk(
	'order/getAll',
	async (token, { rejectWithValue }) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get(`${url}/admin/orders`, config);

		return data.data;
	}
);

// GET SINGLE ORDER BY ID
export const getOrderById = createAsyncThunk(
	'order/getById',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.get(`${url}/admin/orders/${id}`, config);
			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: {
		// Get all orders
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

		// Get Order By ID
		[getOrderById.pending]: (state, action) => {
			state.loading = true;
		},
		[getOrderById.fulfilled]: (state, action) => {
			state.order = action.payload;
			state.loading = false;
		},
		[getOrderById.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
