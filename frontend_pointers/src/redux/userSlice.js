import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    displayPopup: false,
    currentUser: {
        photo: ""
    },
};

const userSlice = createSlice({
    name: `user`,
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.displayPopup = false;
        },
        logout(state) {
            state.currentUser = {photo: ""};
            state.isAuthenticated = false;
            state.displayPopup = false;
        },
        togglePopup(state) {
            state.displayPopup = !state.displayPopup;
        },
    },
});

export const {
    login,
    logout,
    togglePopup
} = userSlice.actions;
export default userSlice.reducer;
