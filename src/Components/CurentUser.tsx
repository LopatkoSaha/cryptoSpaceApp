import { useDispatch } from 'react-redux';
import { setUser } from './store/userSlice';
import { useSelector } from 'react-redux';
import rootReducer from './store/reducers';


export const CurentUser = () =>{
    const dispatch = useDispatch();
    const selectUser = (state: typeof rootReducer) => {
        //@ts-ignore
        return state.user
    };
    const user = useSelector(selectUser);

    return (
        <>
            {user.name && 
                <div>{user.name}</div>
            }
            <button onClick={() => dispatch(setUser( {token: '12', name: 'John' }))}>Get user</button>
        </>
    )
}