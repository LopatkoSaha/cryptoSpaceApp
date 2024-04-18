import style from './navSiderCoins.module.css';
import {useEffect, useState} from 'react';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {axiosAvailableCoins} from '../../axios/getAvailableCoins';
import { ExchangeCryptoWS } from '../ExchangeCrypto/ExchangeCryptoWS';
import { setCurrentCourseStore } from '../store/currentCourseSlice';



export const NavSiderCoins = ({setShowCointPage}: {setShowCointPage: any}) =>{
    const dispatch = useDispatch();

    const [currentCurs, setCurrentCurse] = useState();
    ExchangeCryptoWS(setCurrentCurse);

    useEffect(() => {
        axiosAvailableCoins(dispatch)
    },[])

    useEffect(() => {
        dispatch(setCurrentCourseStore(currentCurs))
    },[currentCurs])

    const availableCoins = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.availableCoins
    });

    const coinsIcon = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.coinsIcon
    });

    return (
        <>
            <div className={style.wrapper}>
            {availableCoins.map((item: string) => {
                if(item !== 'USD'){
                    return  (<div className={style.container} key={item}>
                                <div className={style.imgBtnCoin}
                                onClick={()=>setShowCointPage(item)}
                                >
                                    <img src={coinsIcon[item]}/>
                                    {item}
                                </div>
                                { currentCurs 
                                    ? <div className={style.item}>{currentCurs[item]} $</div>
                                    : <div className={style.item}>Loading...</div>
                                }
                            </div>
                    )
                }
            })}
            </div>
        </>
    )
}