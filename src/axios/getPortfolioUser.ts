import { Dispatch } from '@reduxjs/toolkit';
import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import { setPortfolioUser } from '../Components/store/portfolioUserSlice'

export const axiosPortfolioUser = (dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/portfolioUser')
    .then(response => {
        console.log('response =', response.data);
        
        dispatch(setPortfolioUser(response.data));
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}