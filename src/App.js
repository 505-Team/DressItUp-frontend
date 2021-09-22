import React from 'react';
import Header from './T-components/Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './T-components/Footer';
// import Login from './T-components/Login';
import CarsleBeging from "./CarsleBeging";
import ImageText from './assets/components/HomePage/ImageText'
import { withAuth0 } from '@auth0/auth0-react';
import Paint from './T-components/Paint'
import PostPainting from './M-Components/Postpainting';
import StorePage from './assets/components/StorePage';
import Aboutus from './E-Components/Aboutus';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fav from './E-Components/Favorites'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './T-components/LoginButton';
// import FactCard from './T-components/FactCard';
import CartItem from './T-components/CartItem';
// import Card from './T-components/Card'
import NestedImage from './assets/components/HomePage/NestedImage';
import GetStarted from './assets/components/HomePage/GetStarted'
class App extends React.Component {

  render() {

    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    const { user } = this.props.auth0;
    return (
      <>

        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <div id="mainSwitch">
          <Switch >
            <div>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
             
                <div id="topCaruselContainer">
               <CarsleBeging/>
               <div class='strip'></div>
               </div>
                {/* <FactCard /> */}
                <div id='bigSpace'></div>
                <NestedImage/>
                <div id='bigSpace'></div>
                <Paint/>
                <ImageText/>
                {isAuthenticated && <GetStarted isLoggedIn={isAuthenticated ? true : false}/>}
                {!isAuthenticated && <GetStarted isLoggedIn={isAuthenticated ? true : false}/>}
                <div id='bigSpace'></div>
              </Route>
              
              <Route exact path="/Favorites">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated && <Fav />}
                
              </Route>
              
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
             
              <Route exact path="/PostPainting">
                {isAuthenticated && <PostPainting />}
              </Route>
              <Route exact path="/StorePage">
                <StorePage isLoggedIn={isAuthenticated} userEmail={isAuthenticated ? user.email : ''}/>
              </Route>
              <Route exact path="/Aboutus">
                <Aboutus />
              </Route>
              <Route exact path="/CartItem">
              {isAuthenticated && <CartItem />}
              </Route>
            </div>
          </Switch>
          </div>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}
export default withAuth0(App);

