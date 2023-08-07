
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileScreen from '../dlt-module-commons/dlt-components/screen/ProfileScreen/ProfileScreen';
import SettingScreen from '../dlt-module-commons/dlt-components/screen/SettingScreen/SettingScreen';
import JobListScreen from '../dlt-module-commons/dlt-components/screen/JobListScreen/JobListScreen';
import SideBarContainer from '../dlt-module-commons/dlt-components/components/sidebar/SideBarContainer';

function App() {
  return (
    <Router>
      <SideBarContainer />
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/job-list" element={<JobListScreen />} />
        <Route path="/setting" element={<SettingScreen />} />
        {/* Default route */}
        <Route path="/" element={<JobListScreen />} />
        <Route path="*" element={<JobListScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
