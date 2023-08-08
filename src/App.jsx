
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import ProfileScreen from '../dlt-module-commons/dlt-components/screen/ProfileScreen/ProfileScreen';
import SettingScreen from '../dlt-module-commons/dlt-components/screen/SettingScreen/SettingScreen';
import JobListScreen from '../dlt-module-commons/dlt-components/screen/JobListScreen/JobListScreen';
import SideBarContainer from '../dlt-module-commons/dlt-components/components/sidebar/SideBarContainer';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className='dlt-layout'>
        <Sider className='dlt-sider' width={200} theme="light">
          <SideBarContainer />
        </Sider>
        <Layout>
          {/* <Header className='dlt-header'>Header</Header> */}
          <Content className='dlt-content'>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/job-list" element={<JobListScreen />} />
              <Route path="/settings" element={<SettingScreen />} />
              {/* Default route */}
              <Route path="/" element={<JobListScreen />} />
              <Route path="*" element={<JobListScreen />} />
            </Routes>
          </Content>
          {/* <Footer className='dlt-footer'>Footer</Footer> */}
        </Layout>
      </Layout>
    </Router>
  )
}

export default App;
