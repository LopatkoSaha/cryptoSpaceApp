import { Dispatch } from '@reduxjs/toolkit';

import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import store from '../Components/store/store';
import { axiosPortfolioUser } from './getPortfolioUser'

export const axiosChangePortfolioUser = (data: Record<string, any>, dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/buyCurrency', 
    {
        buyFrom: data.buyFrom, 
        buyTo: data.buyTo, 
        quantity: data.quantity,
    }
    )
    .then(response => {
        dispatch(setMessage(response.data));
        axiosPortfolioUser(dispatch);
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}