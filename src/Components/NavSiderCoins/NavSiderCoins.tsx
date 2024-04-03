import style from './navSiderCoins.module.css';
import {useEffect, useState} from 'react';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';
import {axiosAvailableCoins} from '../../axios/getAvailableCoins';
import { useDispatch } from 'react-redux';
import { ExchangeCryptoWS } from '../ExchangeCrypto/ExchangeCryptoWS';

export const NavSiderCoins = ({setShowCointPage}: {setShowCointPage: any}) =>{
    const dispatch = useDispatch();

    const [currentCurs, setCurrentCurse] = useState();
    ExchangeCryptoWS(setCurrentCurse);

    useEffect(()=>{
        axiosAvailableCoins(dispatch);
    },[])

    const availableCoins = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.availableCoins
    });

    return (
        <>
            <div className={style.wrapper}>
            {availableCoins.map((item: string) => {
                return  (<div className={style.container} key={item}>
                            <button 
                                className={`${style.item}`} 
                                onClick={()=>setShowCointPage(item)}
                            >
                                {item}
                            </button>
                            { currentCurs 
                                ? <div className={style.item}>{currentCurs[item]} $</div>
                                : <div className={style.item}>Loading...</div>
                            }
                        </div>
                )
            })}
            </div>
        </>
    )
}