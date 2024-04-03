import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: string[] = [];

const availableCoinsSlice = createSlice({
        name: 'availableCoins',
        initialState,
        reducers: {
            setAvailableCoins(state, action: PayloadAction<string[]>) {
                return action.payload;
            },
        },
    });

export const { setAvailableCoins } = availableCoinsSlice.actions;
export default availableCoinsSlice.reducer;