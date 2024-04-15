import { Dispatch } from '@reduxjs/toolkit';
import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import { setPortfolioUser } from '../Components/store/portfolioUserSlice';
import store from '../Components/store/store';

export const axiosChangePortfolioUser = (data: Record<string, any>, dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/buyCurrency', {
        buyFrom: data.buyFrom, 
        buyTo: data.buyTo, 
        quantity: data.quantity,
        token: store.getState().user.token,

    })
    .then(response => {
        dispatch(setMessage(response.data));
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}