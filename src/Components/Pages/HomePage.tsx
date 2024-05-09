import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import style from './homePage.module.css';
import { quantityUsers } from '../../axios/getQuantityUser';
import { bestCourses } from '../../axios/getBestCourses';


export const HomePage = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [courses, setCourses] = useState([{
        icon: '',
        name: "",
        course: 0,
        dinamic: 0,
    }]);
    

    useEffect(() => {
        const fetchQuantity = async () => {
            const quantityFromServer = await quantityUsers(dispatch);
            setQuantity(quantityFromServer);
        };
        const fetchCourses = async () => {
            const coursesFromServer = await bestCourses(dispatch);
            setCourses(coursesFromServer);
        };
        fetchQuantity();
        fetchCourses();
    },[dispatch])

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.messageQuantity}>
                    They trast us {quantity} users
                </div>
                <div className={style.bestCourses}>
                    {courses.length > 1 && courses.map((item) => {
                        return (
                            <div className={style.containerCoin}>
                                <div className={style.icon}>
                                    <img src={item.icon} />
                                </div>
                                <div className={style.name}>{item.name}</div>
                                <div className={style.course}>{item.course}$</div>
                                <div className={item.dinamic >= 0 ? style.dinamicPos : style.dinamicNeg}><div>{item.dinamic}</div></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}