import React from 'react';
import Header from './T-components/Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './T-components/Footer';
import Login from './T-components/Login';
import Profile from './T-components/Profile';
import Favorites from './T-components/Favorites';
import { withAuth0 } from '@auth0/auth0-react';
import Paint from './T-components/Paint';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {

    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated ? <Favorites/>: <Login/>}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/Profile">

                <Profile/>

              </Route>
            </Switch>
            <Paint/>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}
export default withAuth0(App);

