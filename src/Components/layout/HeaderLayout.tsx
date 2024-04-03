import style from './layout.module.css';
import { Layout } from 'antd';
import {Authorization} from '../authorization/Authorization';

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    height: 100,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const { Header } = Layout;

export const HeaderLayout = ({setShowCointPage}: {setShowCointPage: any}) => {
    return (
        <Header style={headerStyle}>
            <div className={style.headerName}
                onClick={()=>setShowCointPage('home')}
            >Cripto Space</div>
            <Authorization/>
        </Header>
    )
}