import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        isAdmin: false,
        accessToken: ""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isAdmin = action.payload.isAdmin;
            state.accessToken = action.payload.accessToken;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;