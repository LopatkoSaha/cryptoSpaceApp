import style from './page.module.css';
import {useState, useEffect} from 'react';
import{useDispatch} from 'react-redux'
import {axiosStatisticCurse} from '../../axios/getStatisticCurse';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';
import {ChartCurrency} from '../chartCurrency/ChartCurrency';
import { PortfolioUser } from '../PortfolioUser/PortfolioUser'
import { axiosPortfolioUser } from '../../axios/getPortfolioUser';
import { axiosChangePortfolioUser } from '../../axios/setPortfolioUser';

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
    })

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
                        <button onClick={()=>{ axiosPortfolioUser(dispatch)}}>Update</button>
                        <button onClick={()=>{ axiosChangePortfolioUser({
                                buyFrom: 'USD', 
                                buyTo: 'bitcoin', 
                                quantity: 1,
                            }, dispatch); axiosPortfolioUser(dispatch)
                        }}>Exchange</button>
                    </div>
                </div>
                {user.name && <PortfolioUser />}
            </div>
        </>
    )
}