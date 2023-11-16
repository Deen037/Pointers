import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: `user`,
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
    },
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;