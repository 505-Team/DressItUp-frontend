import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoutButton from "./LogoutButton";
// import LoginButton from './LoginButton';
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import artLogo from "../assets/artLogo/World Of Art.gif";
import CartItem from "./CartItem";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        </style>
        <Navbar
          className="navbarstaylheader"
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="black"
        >
          <img className="logoDesign" src={artLogo} autoplay loop alt="logo" />

          <Link to="/" id="link">
            <p className="headerNavButton"> Home</p>
          </Link>
          <Link to="/StorePage" id="link">
            <p className="headerNavButton">Gallery & Store</p>
          </Link>
          {isAuthenticated && (
            <Link to="/Favorites" id="link">
              <p className="headerNavButton">Favorites</p>
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/PostPainting" id="link">
              <p className="headerNavButton">Artwork</p>
            </Link>
          )}

          <Link to="/Aboutus" id="link">
            <p className="headerNavButton">About Us</p>
          </Link>

          {isAuthenticated && (
            <Link to="/CartItem" id="link">
              <p className="headerNavButton">Requested Items</p>
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/PostPainting" id="link">
              <p className="headerNavButton">Post Painting</p>
            </Link>
          )}
          {!isAuthenticated && <LoginButton style={{ color: "red" }} />}

          {isAuthenticated && <LogoutButton />}
          {/* { isAuthenticated ? <LogoutButton /> : <LoginButton /> } */}
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
