import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: state => {
            state.isLoading = true;
        },
        signUserSuccess: (state,action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.user = action.payload;
        },
        signUserFailure: state => {
            state.isLoading = false;
        }
    },
});

export const {
    signUserStart,
    signUserSuccess,
    signUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
