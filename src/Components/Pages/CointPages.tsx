import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './page.module.css';
import rootReducer from '../store/reducers';
import {axiosStatisticCurse} from '../../axios/getStatisticCurse';
import {ChartCurrency} from '../chartCurrency/ChartCurrency';
import { PortfolioUser } from '../PortfolioUser/PortfolioUser'
import { axiosPortfolioUser } from '../../axios/getPortfolioUser';
import { axiosChangePortfolioUser } from '../../axios/setPortfolioUser';
import { Dropdown } from '../Dropdown/Dropdown';
import { setMessage } from '../store/messageSlice';

const defultReqStatistic = {
    from: 3600000*24,
    to: 1000,
    precision: 'hour'
}

export const CointPages = ({coinName}: {coinName: string}) => {

    const coinsIcons = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.coinsIcon
    });
    const user = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.user
    });
    const availableCoins: string[] = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.availableCoins
    });
    
    const portfolioUser = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.portfolio
    });

    const currentCourse = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.currentCourse
    });

    const portfolioUserCurrencyName = ['USD'].concat(Object.keys(portfolioUser.coins));

    const defultStateStatistic: Record<string, any>[] = [{
        createdDate: "",
        [coinName]: 0
    }]

    const dispatch = useDispatch();
    const [statistic, setStatistic] = useState(defultStateStatistic);
    const [reqStatistic, setReqStatistic] = useState(defultReqStatistic);
    const [isActive, setIsActive] = useState({
        day: true,
        week: false,
        month: false
    });
    const [transaction, setTrasaction] = useState({buyFrom: '', buyTo: '', quantity: 0});

    const handlerStatistic = (name: string, data: Record<string, any>) => {
        axiosStatisticCurse(dispatch, {
            coin: name, 
            from: data.from, 
            to: data.to, 
            precision: data.precision
        })
        .then(statistic => setStatistic(statistic.data));
    }

    useEffect(()=>{
        handlerStatistic(coinName, reqStatistic);
    },[coinName, reqStatistic]);
    
    const handlerExchange = () => {
        if(transaction.buyFrom === 'USD' && transaction.quantity > portfolioUser.USD) {
            dispatch(setMessage('You have no USD'))
            return
        }
        if(transaction.buyTo === 'USD' && currentCourse[transaction.buyFrom]*portfolioUser.coins[transaction.buyFrom] < transaction.quantity){
            dispatch(setMessage(`You have no ${transaction.buyFrom}`))
            return
        }
        if(currentCourse[transaction.buyFrom]*portfolioUser.coins[transaction.buyFrom] < currentCourse[transaction.buyTo]*transaction.quantity){
            dispatch(setMessage(`You have no ${transaction.buyFrom}`))
            return
        }else{
            axiosChangePortfolioUser(transaction, dispatch);
            setTrasaction((prev: any) => ({...prev, quantity: +0}));
        }
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.wrapperChart}>
                    <div className={style.header}>
                        <img src={coinsIcons[coinName]}/>
                        {coinName}
                    </div>
                    <div className={style.containerChart}>
                        {statistic && coinName
                        ? <ChartCurrency data={statistic} coinName={coinName} />
                        : <div>No statistic</div>
                        }
                    </div>
                    <div className={style.containerBtn}>
                        <button className={isActive.day ? style.btnActive : ''} 
                            onClick={()=>{setReqStatistic(prev=>({...prev, from: 3600000*24, precision: 'hour'}));
                                setIsActive({day: true, week: false, month: false})
                            }}
                        >
                            Day
                        </button>
                        <button className={isActive.week ? style.btnActive : ''}
                            onClick={()=>{setReqStatistic(prev=>({...prev, from: 3600000*24*7, precision: 'day'}));
                                setIsActive({day: false, week: true, month: false})
                            }}
                        >
                            Week
                        </button>
                        <button className={isActive.month ? style.btnActive : ''}
                            onClick={()=>{setReqStatistic(prev=>({...prev, from: 3600000*24*7*4, precision: 'week'}));
                                setIsActive({day: false, week: false, month: true})
                            }}
                        >
                            Month
                        </button>
                        <button onClick={()=>{handlerStatistic(coinName, reqStatistic)}}>Refresh</button>
                    </div>
                </div>
                {user.token && 
                    <div className={style.wrapperPortfolio}>
                        <PortfolioUser />
                        <div className={style.dropdown}>
                            <Dropdown options={availableCoins} onSelect={setTrasaction} flag='buyFrom' />
                            <Dropdown options={portfolioUserCurrencyName} onSelect={setTrasaction} flag='buyTo'/>
                            <input
                                placeholder="quantity" 
                                type="number" 
                                name="quantity" 
                                min={0}
                                max={1000}
                                value={transaction.quantity}
                                onChange={(e) => setTrasaction((prev) => ({...prev, quantity: +e.target.value}))}
                            />
                            <button onClick={handlerExchange}>Exchange</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}