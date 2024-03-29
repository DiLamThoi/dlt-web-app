import React, { useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { RequireAuth, useSignOut } from 'react-auth-kit';
import ProfileScreen from '@dlt-components/screen/ProfileScreen/ProfileScreen';
import SettingScreen from '@dlt-components/screen/SettingScreen/SettingScreen';
import JobListScreen from '@dlt-components/screen/JobListScreen/JobListScreen';
import EmployerScreen from '@dlt-components/screen/EmployerScreen/EmployerScreen';
import SideBarContainer from '@dlt-components/components/sidebar/SideBarContainer';
import InfoBarGlobal from '@dlt-components/components/inforBar/global/infoBarGlobal';

const { Header, Sider, Content, Footer } = Layout;

const HomeScreen = () => {
    const signOut = useSignOut();
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        signOut();
        navigate('/login');
    }, [navigate, signOut]);

    return (
        <RequireAuth loginPath="/login">
            <Layout className="dlt-layout">
                <Sider className="dlt-sider" width={200} theme="light">
                    <SideBarContainer />
                </Sider>
                <Layout>
                    {/* <Header className='dlt-header'>Header</Header> */}
                    <Content className="dlt-content">
                        <Routes>
                            {/* <Route path="/login" element={<LoginScreen />} /> */}
                            <Route path="/jobs" Component={JobListScreen} />
                            <Route path="/employers" Component={EmployerScreen} />
                            <Route path="/profile" Component={ProfileScreen} />
                            {/* <Route path="/settings" Component={SettingScreen} /> */}
                            {/* Default route */}
                            <Route path="/" Component={JobListScreen} />
                            <Route path="*" Component={JobListScreen} />
                        </Routes>
                    </Content>
                    {/* <Footer className='dlt-footer'>Footer</Footer> */}
                </Layout>
                <InfoBarGlobal />
            </Layout>
        </RequireAuth>
    );
};

export default HomeScreen;
