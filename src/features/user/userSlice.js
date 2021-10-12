import { createSlice } from '@reduxjs/toolkit';

/**
 * By default user detials are empty
 */
const initialState = {
	name: '',
	email: '',
	photo: '',
};

/**
 * Create user detials
 */

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		/**
		 * Set user details when login
		 * @param {*} state
		 * @param {*} action
		 */
		setUserLoginDetails: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},

		/**
		 * User details is empty when logout
		 * @param {*} state
		 */
		setSignOutState: (state) => {
			state.name = null;
			state.email = null;
			state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
