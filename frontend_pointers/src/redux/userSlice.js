import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    displayPopup: false,
    currentUser: {
        photo: "",
        crew: [],
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
            state.currentUser = {photo: "", crew: []};
            state.isAuthenticated = false;
            state.displayPopup = false;
        },
        togglePopup(state) {
            state.displayPopup = !state.displayPopup;
        },
        update(state, action) {
            state.currentUser = action.payload;
        },
    },
});

export const {
    login,
    logout,
    togglePopup,
    update,
} = userSlice.actions;
export default userSlice.reducer;
