import style from './authorization.module.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Modal} from '../Modal/Modal';
import {axiosRegistration} from '../../axios/authorization';

export const Registration = ({setShowRegictration, setShowLogin}: {setShowRegictration: any, setShowLogin: any}) => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const clearForm = () => {
        setLogin('');
        setPassword('');
        setShowRegictration(false);
    }

    return(
        <>
            <Modal closeHandler={() => {setShowRegictration(false)}}>
                <div className={style.container}>
                    <div className={style.text}>Registration</div>
                    <div>
                        <label htmlFor='name'>
                        <div style={{fontSize: '0.9rem', color: 'red', marginRight: '5px'}}>*name</div>
                            <input
                                id='name'
                                required
                                placeholder="name" 
                                type="text" 
                                name="name" 
                                tabIndex={1} 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
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
                    <button onClick={async () => {
                        axiosRegistration(name, login, password, dispatch);
                            // await logIn({userName, password}, dispatch);
                            // getUserByToken(dispatch); 
                            clearForm(); 
                            // setIsSignIn(false)
                        }}
                    >
                        Send
                    </button>
                    <button onClick={() => {setShowRegictration(false); setShowLogin(true)}}>Login</button>
                </div>
            </Modal>
        </>
    )
}