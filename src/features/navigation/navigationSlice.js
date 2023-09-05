import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showPopper: false,
};

export const navigationSlice = createSlice( {
	name: "navigation",
	initialState,
	reducers: {
		clearState: ( ) => initialState,
		setPopper: ( state, action ) => {
			state.showPopper = action.payload;
		},
	}
} );

export const { clearState, setPopper } = navigationSlice.actions;
export default navigationSlice.reducer;
