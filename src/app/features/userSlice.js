import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	userCount: 0,
	loading: false,
	error: null,
};

export const getAllUsers = createAsyncThunk(
	'user/getAll',
	async (token, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.get(
				'https://gocartsapp.herokuapp.com/admin/users',
				config
			);

			return data.data;
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
		[getAllUsers.pending]: (state, action) => {
			state.loading = true;
		},
		[getAllUsers.fulfilled]: (state, action) => {
			state.users = action.payload;
			state.userCount = action.payload.length;
			state.loading = false;
		},
		[getAllUsers.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
