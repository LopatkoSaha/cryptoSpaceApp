import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './theme.module.css';
import { setTheme } from '../store/themeSlice';
import rootReducer from '../store/reducers';

export const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.theme
    });
    return (
        <>
            <div className={theme === 'light' ? style.containerSwitchLight : style.containerSwitchDark}
                onClick={()=>{theme === 'light' ? dispatch(setTheme('dark')) : dispatch(setTheme('light'))}}
            >
                <div className={theme === 'light' ? style.switchLight : style.switchDark}></div>
            </div>
        </>
    )
}