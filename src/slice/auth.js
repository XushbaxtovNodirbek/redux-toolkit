import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/peresistance-storage";

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
            setItem("token", action.payload.token);
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
