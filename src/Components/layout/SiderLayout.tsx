import { Layout } from 'antd';
import {NavSiderCoins} from '../NavSiderCoins/NavSiderCoins';


const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '100px',
    width: "20%",
    color: '#fff',
    backgroundColor: '#1677ff',
};

const { Sider } = Layout;

export const SiderLayout = ({setShowCointPage}: {setShowCointPage: any}) => {
    
    return (
        <Sider style={siderStyle}>
            <NavSiderCoins setShowCointPage={setShowCointPage} />
        </Sider>
    )
}