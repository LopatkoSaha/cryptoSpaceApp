import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import availableCoinsReducer from './availableCoinsSlice';
import loaderSlice from './loaderSlice';
import coinsIconSlice from './coinsIconSlice';

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    availableCoins: availableCoinsReducer,
    coinsIcon: coinsIconSlice,
    loader: loaderSlice,
});

export default rootReducer;