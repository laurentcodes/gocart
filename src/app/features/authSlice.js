import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const authTokenFromStorage = localStorage.getItem('gocart-token')
	? JSON.parse(localStorage.getItem('gocart-token'))
	: null;

const initialState = {
	userLogin: { authToken: authTokenFromStorage },
	loading: false,
};

export const loginUser = createAsyncThunk(
	'auth/login',
	async (email, password) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				'https://reqres.in/api/login',
				{ email, password },
				config
			);

			console.log(data);
			return data.token;
		} catch (error) {
			console.log('first error', error);
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: async (state) => {
			localStorage.removeItem('gocart-token');
      window.location.reload();
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
	},
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
