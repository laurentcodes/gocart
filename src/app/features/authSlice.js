import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const authTokenFromStorage = localStorage.getItem('gocart-token')
	? JSON.parse(localStorage.getItem('gocart-token'))
	: null;

const initialState = {
	userLogin: { authToken: authTokenFromStorage },
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
				'https://reqres.in/api/login',
				user,
				config
			);

			return data.token;
		} catch (err) {
			console.log(err);
			return rejectWithValue(err.response.data.error);
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
			state.userLogin.authToken = action.payload;
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
