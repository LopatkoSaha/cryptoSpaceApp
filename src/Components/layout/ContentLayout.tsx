import { Layout } from 'antd';
import {CointPages} from '../Pages/CointPages';
import {HomePage} from '../Pages/HomePage';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
};

export const ContentLayout = ({showCoinPage}: {showCoinPage: any}) => {
    
    return (
        <Content style={contentStyle}>
            {showCoinPage === 'home' ? <HomePage/> :
                <CointPages coinName={showCoinPage}/>
            }
        </Content>
    )
}