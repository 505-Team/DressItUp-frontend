import React from 'react';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Postpainting from './Postpainting';

class App extends React.Component {

  render() {
    const{isAuthenticated}=this.props.auth0;
    console.log('app', this.props);
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
             {
              isAuthenticated?<Postpainting/>:<LoginButton/>
             }
              </Route>              
            </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);