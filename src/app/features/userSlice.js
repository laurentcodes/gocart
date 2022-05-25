import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_API_URL;

const initialState = {
	users: [],
	user: {},
	stats: {},
	loading: false,
	error: null,
	userBlocked: false,
};

// GET USERS STATISTICS
export const getUsersStat = createAsyncThunk(
	'user/stats',
	async (token, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.get(
				`${url}/admin/users/stats/overview`,
				config
			);

			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// GET ALL USERS
export const getAllUsers = createAsyncThunk(
	'user/getAll',
	async (token, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.get(
				`${url}/admin/users`,
				config
			);

			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// GET SINGLE USER BY ID
export const getUserById = createAsyncThunk(
	'user/getById',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.get(
				`${url}/admin/users/${id}?field=user_id`,
				config
			);
			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// BLOCK USER
export const blockUser = createAsyncThunk(
	'user/block',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.put(
				`${url}/admin/users/${id}/block`,
				{},
				config
			);

			return data.message;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

// UNBLOCK USER
export const unblockUser = createAsyncThunk(
	'user/unblock',
	async (data, { rejectWithValue }) => {
		const { id, authToken } = data;

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
			};
			const { data } = await axios.put(
				`${url}/admin/users/${id}/unblock`,
				{},
				config
			);

			return data.message;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		// Get Stats
		[getUsersStat.pending]: (state, action) => {
			state.loading = true;
		},
		[getUsersStat.fulfilled]: (state, action) => {
			state.stats = action.payload;
			state.loading = false;
		},
		[getUsersStat.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;

			if (state.error.status === 401 || 406) {
				localStorage.removeItem('gocart-token');
			}
		},

		// Get All Users
		[getAllUsers.pending]: (state, action) => {
			state.loading = true;
		},
		[getAllUsers.fulfilled]: (state, action) => {
			state.users = action.payload;
			state.loading = false;
		},
		[getAllUsers.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		// Get User By ID
		[getUserById.pending]: (state, action) => {
			state.loading = true;
		},
		[getUserById.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.loading = false;
		},
		[getUserById.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;

			if (state.error.status === 401 || 406) {
				localStorage.removeItem('gocart-token');
			}
		},

		// Block User
		[blockUser.pending]: (state, action) => {
			state.loading = true;
		},
		[blockUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.userBlocked = true;
		},
		[blockUser.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},

		// Unblock User
		[unblockUser.pending]: (state, action) => {
			state.loading = true;
		},
		[unblockUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.userBlocked = false;
		},
		[unblockUser.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
