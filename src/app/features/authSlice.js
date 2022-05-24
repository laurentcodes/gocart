import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const authTokenFromStorage = localStorage.getItem('gocart-token')
	? JSON.parse(localStorage.getItem('gocart-token'))
	: null;

const initialState = {
	userLogin: {
		authToken: authTokenFromStorage.jwt || null,
		userName: authTokenFromStorage.username || null,
	},
	loading: false,
	error: null,
};

export const loginUser = createAsyncThunk(
	'auth/login',
	async (user, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				'https://gocartsapp.herokuapp.com/admin/auth/login',
				user,
				config
			);

			return data.data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('gocart-token');
			state.userLogin.authToken = null;
		},
	},
	extraReducers: {
		[loginUser.pending]: (state, action) => {
			state.loading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.userLogin.authToken = action.payload.jwt;
			state.userLogin.userName = action.payload.username;
			localStorage.setItem('gocart-token', JSON.stringify(action.payload));
			state.loading = false;
		},
		[loginUser.rejected]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
