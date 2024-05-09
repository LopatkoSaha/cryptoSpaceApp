import { Dispatch } from '@reduxjs/toolkit';

import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
type CoursesType = Array<{
    name: string;
    course: number;
    dinamic: number;
    icon: string;
}>
type BestCoursesType = (dispatch: Dispatch) => Promise<CoursesType>;

export const bestCourses: BestCoursesType = async (dispatch) => {
    try {
        const response = await axiosInst.post('http://localhost:4500/bestCourses');
        return response.data;
    } catch (error) {
        dispatch(setMessage('Best Courses Error'));
        throw error;
    }
};