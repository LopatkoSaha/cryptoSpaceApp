import style from './authorization.module.css';
import {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {axiosLogin} from '../../axios/authorization';
import {useDispatch} from 'react-redux';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';

export const Login = ({setShowLogin, setShowRegictration}: {setShowRegictration: any, setShowLogin: any}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const clearForm = () => {
        setLogin('');
        setPassword('');
        setShowLogin(false);
    }
    const selectUser = (state: typeof rootReducer) => {
        //@ts-ignore
        return state.user
    };
    const user = useSelector(selectUser);
    return(
        <>
            <Modal closeHandler={() => {setShowLogin(false)}}>
                <div className={style.container}>
                    <div className={style.text}>Login</div>
                    <div>
                        <label htmlFor='login'>
                        <div style={{fontSize: '0.9rem', color: 'red', marginRight: '5px'}}>*login</div>
                            <input
                                id='login'
                                required
                                placeholder="email" 
                                type="text" 
                                name="login" 
                                tabIndex={1} 
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor='password'>
                            <div style={{fontSize: '0.9rem', color: 'red', marginRight: '5px'}}>*password</div>
                            <input
                                id='password'
                                required
                                placeholder="password"
                                type="password" 
                                name="password" 
                                tabIndex={2} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className={style.btnSigReg}>
                    <button onClick={() => {
                            axiosLogin(login, password, dispatch); 
                            clearForm(); 
                        }}
                    >
                        Send
                    </button>
                    {!user.token &&
                        <button onClick={() => {setShowRegictration(true); setShowLogin(false)}}>Registration</button>
                    }
                </div>
            </Modal>
        </>
    )
}