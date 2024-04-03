import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import availableCoinsReducer from './availableCoinsSlice';
import loaderSlice from './loaderSlice';

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    availableCoins: availableCoinsReducer,
    loader: loaderSlice,
});

export default rootReducer;