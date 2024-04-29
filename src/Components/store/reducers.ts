import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import messageReducer from './messageSlice';
import availableCoinsReducer from './availableCoinsSlice';
import loaderSlice from './loaderSlice';
import coinsIconSlice from './coinsIconSlice';
import portfolioUserSlice from './portfolioUserSlice';
import currentCourseSlice from './currentCourseSlice';
import themeSlice from './themeSlice';

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    availableCoins: availableCoinsReducer,
    coinsIcon: coinsIconSlice,
    loader: loaderSlice,
    portfolio: portfolioUserSlice,
    currentCourse: currentCourseSlice,
    theme: themeSlice,
});

export default rootReducer;