import React from 'react';
import App from './App.jsx';

// Providers
import store from './store/store';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit';
import { ConfigProvider as AntdProvider } from 'antd';
import { Router } from 'react-router-dom';

const MainApp = () => (
    <React.StrictMode>
        <AntdProvider>
            <AuthProvider authType="cookie" authName="_auth" cookieDomain={window.location.hostname} cookieSecure={false}>
                <Provider store={store}>
                    <App />
                </Provider>
            </AuthProvider>
        </AntdProvider>
    </React.StrictMode>
);

export default MainApp;
