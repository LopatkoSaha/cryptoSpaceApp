import style from './message.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import rootReducer from '../store/reducers';
import {setMessage} from '../store/messageSlice';

export const Message = () => {
    const dispatch = useDispatch();
    const selectMessage = (state: typeof rootReducer) => {
        //@ts-ignore
        return state.message
    };
    const message = useSelector(selectMessage);
    return (
        <>
            {message &&
                <div className={style.container}>
                    <div className={style.massage} key={Date.now()}>
                        {message}
                    <button 
                        className={style.btn}
                        onClick={() => dispatch(setMessage(''))}
                    >
                        Ok
                    </button>
                    </div>
                </div>
            }
        </>
    )
}