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

export const ContentLayout = ({showCointPage}: {showCointPage: any}) => {
    
    return (
        <Content style={contentStyle}>
            {showCointPage === 'home' ? <HomePage/> :
                <CointPages cointName={showCointPage}/>
            }
        </Content>
    )
}