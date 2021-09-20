import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
class Login extends React.Component {
  render() {
    return(
      <Card id="loginBox" style={{ width: '14rem' }}>
        <Card.Body>
          <Card.Title>Hello Guest</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}
export default Login;
