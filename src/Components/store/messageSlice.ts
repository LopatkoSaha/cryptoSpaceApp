import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: string = '';

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
    setMessage(state, action: PayloadAction<string>) {

        return action.payload;
    },
    // Другие редукторы для обновления состояния пользователя
    },
    });

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;