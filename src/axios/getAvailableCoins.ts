import axiosInst from './middleware';
import { Dispatch } from '@reduxjs/toolkit';
import { setMessage } from '../Components/store/messageSlice';
import { setAvailableCoins } from '../Components/store/availableCoinsSlice';

export const axiosAvailableCoins = (dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/availableCoins')
    .then(response => {
        dispatch(setAvailableCoins(response.data));
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}