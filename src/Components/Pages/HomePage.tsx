import {useDispatch} from 'react-redux';
import {setLoading} from '../store/loaderSlice'

export const HomePage = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div style={{color: 'black'}}>Home</div>
            <button onClick={()=>dispatch(setLoading(true))}>load</button>
        </>
    )
}