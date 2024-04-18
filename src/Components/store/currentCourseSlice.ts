import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: Record<string, any> = {};

const currentCourseSlice = createSlice({
    name: 'currentCourse',
    initialState,
    reducers: {
        setCurrentCourseStore(state, action: Record<string, any>) {
            return action.payload;
        },
    },
});

export const { setCurrentCourseStore } = currentCourseSlice.actions;
export default currentCourseSlice.reducer;