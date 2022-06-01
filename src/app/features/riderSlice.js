import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_API_URL;

const initialState = {
	riders: [],
	rider: {},
	stats: {},
	loading: false,
	error: null,
	riderBlocked: null,
};

// GET RIDERS STATISTICS
export const getRiderStat = createAsyncThunk(
	'rider/stats',
	async (token, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.get(
				`${url}/admin/riders/stats/overview`,
				config
			);

			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// GET ALL RIDERS
export const getAllRiders = createAsyncThunk(
	'rider/getAll',
	async (token, { rejectWithValue }) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get(`${url}/admin/riders`, config);

		return data.data;
	}
);

// GET SINGLE RIDER BY ID
export const getRiderById = createAsyncThunk(
	'rider/getById',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};

			const { data } = await axios.get(
				`${url}/admin/riders/${id}?field=rider_id`,
				config
			);

			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// BLOCK RIDER
export const blockRider = createAsyncThunk(
	'rider/block',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.patch(
				`${url}/admin/riders/${id}/block`,
				{},
				config
			);

			return data.message;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// UNBLOCK RIDER
export const unblockRider = createAsyncThunk(
	'rider/unblock',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.patch(
				`${url}/admin/riders/${id}/unblock`,
				{},
				config
			);

			return data.message;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

export const riderSlice = createSlice({
	name: 'rider',
	initialState,
	reducers: {},
	extraReducers: {
		// Get Stats
		[getRiderStat.pending]: (state, action) => {
			state.loading = true;
		},
		[getRiderStat.fulfilled]: (state, action) => {
			state.stats = action.payload;
			state.loading = false;
		},
		[getRiderStat.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;

			if (state.error.status === 401 || 406) {
				localStorage.removeItem('gocart-token');
			}
		},

		// Get All Riders
		[getAllRiders.pending]: (state, action) => {
			state.loading = true;
		},
		[getAllRiders.fulfilled]: (state, action) => {
			state.riders = action.payload;
			state.loading = false;
		},
		[getAllRiders.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		// Get Rider By ID
		[getRiderById.pending]: (state, action) => {
			state.loading = true;
		},
		[getRiderById.fulfilled]: (state, action) => {
			state.rider = action.payload;
			state.loading = false;
		},
		[getRiderById.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		// Block Rider
		[blockRider.pending]: (state, action) => {
			state.loading = true;
		},
		[blockRider.fulfilled]: (state, action) => {
			state.loading = false;
			state.riderBlocked = true;
		},
		[blockRider.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		// Unblock Rider
		[unblockRider.pending]: (state, action) => {
			state.loading = true;
		},
		[unblockRider.fulfilled]: (state, action) => {
			state.loading = false;
			state.riderBlocked = false;
		},
		[unblockRider.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = riderSlice.actions;

export default riderSlice.reducer;
