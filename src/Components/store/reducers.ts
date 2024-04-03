import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import availableCoinsReducer from './availableCoinsSlice';

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    availableCoins: availableCoinsReducer,
});

export default rootReducer;