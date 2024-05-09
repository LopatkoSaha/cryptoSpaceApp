import { Dispatch } from '@reduxjs/toolkit';

import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
type QuantityUsersType = (dispatch: Dispatch) => Promise<number>;

export const quantityUsers: QuantityUsersType = async (dispatch) => {
    try {
        const response = await axiosInst.post('http://localhost:4500/quantityUsers');
        return response.data as number;
    } catch (error) {
        dispatch(setMessage('Error quantity users'));
        throw error;
    }
};