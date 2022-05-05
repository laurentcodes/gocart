import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	riders: [],
	riderCount: 0,
	loading: false,
	error: null,
};

export const getAllRiders = createAsyncThunk(
	'rider/getAll',
	async (token, { rejectWithValue }) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get(
			'https://gocartsapp.herokuapp.com/admin/riders',
			config
		);

		return data.data;
	}
);

export const riderSlice = createSlice({
	name: 'rider',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllRiders.pending]: (state, action) => {
			state.loading = true;
		},
		[getAllRiders.fulfilled]: (state, action) => {
			state.riders = action.payload;
			state.riderCount = action.payload.length;
			state.loading = false;
		},
		[getAllRiders.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = riderSlice.actions;

export default riderSlice.reducer;
