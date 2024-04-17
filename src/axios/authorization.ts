import { Dispatch } from '@reduxjs/toolkit';
import axiosInst from './middleware';
import { setMessage } from '../Components/store/messageSlice';
import { setUser } from '../Components/store/userSlice';

// Использование экземпляра Axios для отправки запросов
export const axiosLogin = (email: string, password: string, dispatch: Dispatch) => {
    axiosInst.post('http://localhost:4500/auth/login', {
        email,
        password,
    })
    .then(response => {
        dispatch(setUser({token: response.data.token, name: response.data.name}));
    })
    .catch(error => {
        dispatch(setMessage(error.message));
    });
}

export const axiosRegistration = async (name: string, email: string, password: string, dispatch: Dispatch) => {
    await axiosInst.post('http://localhost:4500/auth/registration', {
        name,
        email,
        password,
    })
    .then(response => {
        dispatch(setMessage( `User ${name} is created`));
    })
    .catch(error => {
        dispatch(setMessage( error.message ));
    });
}
