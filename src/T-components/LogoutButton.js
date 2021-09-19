import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LogoutButton.css';

function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <button className='logoutButtonstyle' onClick={() => {
            logout({ returnTo: window.location.origin });
        }} variant="primary">Log out</button>
    );
}

export default LogoutButton;