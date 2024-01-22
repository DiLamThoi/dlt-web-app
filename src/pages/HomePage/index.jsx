import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { RequireAuth } from 'react-auth-kit';
import ProfileScreen from '@dlt-components/screen/ProfileScreen/ProfileScreen';
import SettingScreen from '@dlt-components/screen/SettingScreen/SettingScreen';
import JobListScreen from '@dlt-components/screen/JobListScreen/JobListScreen';
import EmployerScreen from '@dlt-components/screen/EmployerScreen/EmployerScreen';
import SideBarContainer from '@dlt-components/components/sidebar/SideBarContainer';
import InfoBarGlobal from '@dlt-components/components/inforBar/global/infoBarGlobal';

const { Sider, Content } = Layout;

const HomeScreen = () => (
    <RequireAuth loginPath="/login">
        <Layout>
            <Sider theme="light">
                <SideBarContainer />
            </Sider>
            <Layout>
                <Content>
                    <Routes>
                        <Route path="/jobs" Component={JobListScreen} />
                        <Route path="/employers" Component={EmployerScreen} />
                        <Route path="/profile" Component={ProfileScreen} />
                        <Route path="/settings" Component={SettingScreen} />
                        {/* Default route */}
                        <Route path="/" Component={JobListScreen} />
                        {/* <Route path="*" Component={JobListScreen} /> */}
                    </Routes>
                </Content>
            </Layout>
            <InfoBarGlobal />
        </Layout>
    </RequireAuth>
);

export default HomeScreen;
