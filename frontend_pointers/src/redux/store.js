import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';


const reducers = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: reducers,
});

