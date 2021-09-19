import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

function LoginButton() {
    const { loginWithRedirect } = useAuth0();

    return (
    <Button onClick={loginWithRedirect} variant="primary">Log in</Button>
    );
}

export default LoginButton;