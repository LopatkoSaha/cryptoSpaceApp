import { Dispatch } from '@reduxjs/toolkit';

import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import { setPortfolioUser } from '../Components/store/portfolioUserSlice'

export const axiosPortfolioUser = async (dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/portfolio')
    .then((response) => {
        if(response.data.message){
            dispatch(setMessage(response.data.message));
        }else{
            dispatch(setPortfolioUser(response.data))
        }
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}