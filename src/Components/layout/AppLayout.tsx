import { Layout } from 'antd';
import {HeaderLayout} from './HeaderLayout';
import {SiderLayout} from './SiderLayout';
import {ContentLayout} from './ContentLayout';
import {useState} from 'react';
import {Loader} from '../Loader/Loader';
import rootReducer from '../store/reducers';
import { useSelector } from 'react-redux';


export const AppLayout = () => {

const layoutStyle = {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
};
const [showCointPage, setShowCointPage] = useState('home');

const loading = useSelector((state: typeof rootReducer) => {
    //@ts-ignore
    return state.loader
});

    return (
        <Layout style={layoutStyle}>
            <HeaderLayout setShowCointPage={setShowCointPage}/>
            <Layout>
                <SiderLayout setShowCointPage={setShowCointPage}/>
                <ContentLayout showCointPage={showCointPage}/>
            </Layout>
            {loading && <Loader/>}
        </Layout>
    )
}