import style from './portfolioUser.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rootReducer from '../store/reducers';
import { axiosPortfolioUser } from '../../axios/getPortfolioUser';

export const PortfolioUser = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        axiosPortfolioUser(dispatch);
    },[]);


    const selectPortfolio = (state: typeof rootReducer) => {
        //@ts-ignore
        return state.portfolio
    };
    const portfolio = useSelector(selectPortfolio);
    const coinsNames = Object.keys(portfolio.coins);
    let totalCost; 
    
    // portfolio.coins ? totalCost = coinsNames.reduce((acc, item)=>{
    //     acc + portfolio.coins[item]
    // },portfolio.USD) : '';

    return(
        <>
            <div className={style.wrapper}>
                {portfolio.USD &&
                    <div className={style.portfolio}>
                        <div className={style.usd}>USD {portfolio.USD} $</div>
                        <div className={style.currency}>
                            {coinsNames.map((item: string)=>{
                                    return <div key={item}>
                                                {item}  {portfolio.coins[item]}
                                            </div>
                                })
                            }
                        </div>
                        <div>Total {totalCost}</div>
                    </div>
            }
            </div>
        </>
    )
}