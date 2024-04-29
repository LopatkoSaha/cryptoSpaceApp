import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import style from './layout.module.css';
import rootReducer from '../store/reducers';
import { Theme } from '../Theme/Theme'
import {Authorization} from '../authorization/Authorization';



const { Header } = Layout;

export const HeaderLayout = ({setShowCointPage}: {setShowCointPage: any}) => {
    const theme = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.theme
    });
    return (
        <Header className={theme ==='light' ? style.headerStyleLight : style.headerStyleDark}>
            <div className={style.headerName}
                onClick={()=>setShowCointPage('home')}
            >Cripto Space</div>
            <Authorization />
            <Theme />
        </Header>
    )
}