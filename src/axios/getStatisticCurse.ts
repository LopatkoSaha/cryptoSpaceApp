import axiosInst from './middleware';
import { Dispatch } from '@reduxjs/toolkit';
import { setMessage } from '../Components/store/messageSlice';
import {setLoading} from '../Components/store/loaderSlice'

type TStatisticCurse = {
    coin: string,
    from: number,
    to: number,
    precision: string
}

export const axiosStatisticCurse = async (dispatch: Dispatch,{coin, from, to, precision}: TStatisticCurse) => {
    try{
        dispatch(setLoading(true));
        return axiosInst.post<Record<string, any>[]>('http://localhost:4500/statisticsCurs',{
            coin,
            from,
            to,
            precision
        });
    }catch(err){
        if(typeof err === 'object' && err !== null && 'message' in err){
            dispatch(setMessage(err.message!.toString()));
        }
        throw err
    }finally{
        dispatch(setLoading(false));
    }
}