import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import style from './layout.module.css';
import rootReducer from '../store/reducers';
import {NavSiderCoins} from '../NavSiderCoins/NavSiderCoins';

const { Sider } = Layout;

export const SiderLayout = ({setShowCointPage}: {setShowCointPage: any}) => {
    const theme = useSelector((state: typeof rootReducer) => {
        //@ts-ignore
        return state.theme
    });
    return (
        <Sider  className={theme === 'light' ? style.siderStyleLight : style.siderStyleDark}>
            <NavSiderCoins setShowCointPage={setShowCointPage} />
        </Sider>
    )
}