import style from './page.module.css';
import {useState, useEffect} from 'react';
import{useDispatch} from 'react-redux'
import {axiosStatisticCurse} from '../../axios/getStatisticCurse';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';

const defultReqStatistic = {
    from: 3600000,
    to: 1000,
    precision: 'min'
}

export const CointPages = ({coinName}: {coinName: string}) => {

    const coinsIcons = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.coinsIcon
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

    useEffect(()=>{
        axiosStatisticCurse(dispatch, {
            coin: coinName, 
            from: reqStatistic.from, 
            to: reqStatistic.to, 
            precision: reqStatistic.precision
        })
        .then(statistic => setStatistic(statistic.data));
    },[coinName, reqStatistic]);

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <img src={coinsIcons[coinName]}/>
                    {coinName}
                </div>
                <div className={style.containerChart}>
                    {statistic ? statistic.map((item)=>{
                        return(
                            <div className={style.unitStatistic}
                                key={item.createdDate}>
                                curse: {item[coinName]}$
                                <br/>
                                {item.createdDate}
                            </div>
                        )
                    })
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
                        onClick={()=>{setReqStatistic(prev=>({...prev, from: 3600000*24*30, precision: 'week'}));
                            setIsActive({day: false, week: false, month: true})
                        }}
                    >
                        Month
                    </button>
                </div>
            </div>
        </>
    )
}