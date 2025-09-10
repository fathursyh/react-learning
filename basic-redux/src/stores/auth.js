import { createSlice } from "@reduxjs/toolkit";

const intialAuth = {isAuthenticated: false};
export const authSlice = createSlice({
    name: 'auth-slice',
    initialState: intialAuth,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
