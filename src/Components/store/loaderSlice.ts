import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: boolean = false;

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {

            return action.payload;
        },
    },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;