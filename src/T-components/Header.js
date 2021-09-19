import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
// import LoginButton from './LoginButton';
import { withAuth0 } from "@auth0/auth0-react"
import LoginButton from './LoginButton';
import artLogo from '../assets/artLogo/World Of Art.gif';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="black">

          <img className='logoDesign' src={artLogo} autoplay loop
          alt="logo" />


              <Link to="/" id="link">Home</Link>
              <Link to="/StorePage" id="link">Gallery & Store</Link>
              <Link to="/" id="link">Favorites</Link>
              {isAuthenticated && <Link to="/profile" id="link">Profile</Link>}
              <Link to="/Aboutus" id="link">About Us</Link>
              {isAuthenticated && <Link to="/PostPainting" id="link">Post Painting</Link>}
              {!isAuthenticated &&  <LoginButton style={{color: 'red'}} />} 


              {isAuthenticated && <LogoutButton />}
              {/* { isAuthenticated ? <LogoutButton /> : <LoginButton /> } */}

            </Navbar>


          </>
          );
  }
}

          export default withAuth0(Header);