import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: Record<string, any> = {
    USD: '',
    coins: {}
};

const portfolioUserSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setPortfolioUser(state, action: Record<string, any>) {

            return action.payload;
        },
    },
});

export const { setPortfolioUser } = portfolioUserSlice.actions;
export default portfolioUserSlice.reducer;