import { Dispatch } from '@reduxjs/toolkit';

import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import { setAvailableCoins } from '../Components/store/availableCoinsSlice';
import {setCoinsIcon} from '../Components/store/coinsIconSlice'

export const axiosAvailableCoins = (dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/availableCoins')
    .then(response => {
        dispatch(setAvailableCoins(response.data.actualCoins));
        dispatch(setCoinsIcon(response.data.coinsIcon));
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}