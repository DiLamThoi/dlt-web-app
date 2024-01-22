import React from 'react';
import RegisterContainer from '@dlt-components/components/register/RegisterContainer';
import { useToken } from '@dlt-components/hooks';
import DarkThemeButton from '@dlt-components/components/setting/theme/DarkThemeButton';

const RegisterPage = () => {
    const token = useToken();
    return(
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
            <RegisterContainer />
        </div>
    );
};

export default RegisterPage;
