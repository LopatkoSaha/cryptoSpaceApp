import { Layout } from 'antd';
import {HeaderLayout} from './HeaderLayout';
import {SiderLayout} from './SiderLayout';
import {ContentLayout} from './ContentLayout';
import {useState} from 'react';


export const AppLayout = () => {

const layoutStyle = {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
};
const [showCointPage, setShowCointPage] = useState('home')

    return (
        <Layout style={layoutStyle}>
            <HeaderLayout setShowCointPage={setShowCointPage}/>
            <Layout>
                <SiderLayout setShowCointPage={setShowCointPage}/>
                <ContentLayout showCointPage={showCointPage}/>
            </Layout>
        </Layout>
    )
}