import style from './authorization.module.css';
import UserIcon from '../icons/UserIcon';
import {useState} from 'react';
import {Registration} from './Registration';
import {Login} from './Login';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { setUser } from '../../Components/store/userSlice';

export const Authorization = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegistration, setShowRegictration] = useState(false);
    const dispatch = useDispatch();
    const selectUser = (state: typeof rootReducer) => {
        //@ts-ignore
        return state.user
    };
    const user = useSelector(selectUser);

    return(
        <>
            {user.token ?
                <div>
                    <div>{user.name ? user.name : 'User'}</div>
                    <button onClick={()=>dispatch(setUser({token: '', name: ''}))}>Exit</button>
                </div>
            :
                showLogin 
                ?
                    <Login  setShowLogin={setShowLogin} setShowRegictration={setShowRegictration} />
                : showRegistration 
                    ?
                        <Registration setShowRegictration={setShowRegictration} setShowLogin={setShowLogin} />
                    :
                        <button 
                            className={style.iconlogin} 
                            onClick={() => setShowLogin(true)}
                        >
                            <UserIcon/>
                            Log in
                        </button>
            }
        </>
    )
}