import React, { useEffect } from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '@dlt-components/components/login/LoginContainer';
import { useToken } from '@dlt-components/hooks';
import DarkThemeButton from '@dlt-components/components/setting/theme/DarkThemeButton';

const LoginPage = () => {
    const token = useToken();

    const authenticated = useIsAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated()) navigate('/');
    }, [authenticated, navigate]);

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: token.colorBgBase,
            }}
        >
            <div style={{ position: 'absolute', zIndex: 1, right: 0, top: 0, margin: token.marginLG }}>
                <DarkThemeButton />
            </div>
            <LoginContainer />
        </div>
    );
};

export default LoginPage;
