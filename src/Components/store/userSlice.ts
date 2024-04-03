import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
        token: string;
        name: string;
  // Другие поля состояния
}

const initialState: UserState = {
    token: '',
    name: '',
  // Инициализируйте другие поля состояния
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setUser(state, action: PayloadAction<UserState>) {

        return action.payload;
    },
    // Другие редукторы для обновления состояния пользователя
    },
    });

export const { setUser } = userSlice.actions;
export default userSlice.reducer;