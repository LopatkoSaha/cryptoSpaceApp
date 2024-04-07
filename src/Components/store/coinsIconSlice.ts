import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: Record<string, string> = {};

const coinsIconSlice = createSlice({
        name: 'coinsIcon',
        initialState,
        reducers: {
            setCoinsIcon(state, action: PayloadAction<Record<string, string>>) {
                return action.payload;
            },
        },
    });

export const { setCoinsIcon } = coinsIconSlice.actions;
export default coinsIconSlice.reducer;