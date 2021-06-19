import React, { useContext } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

import './Header.css';

const Header = () => {
   const [signedInUser, setSignedInUser] = useContext(UserContext)
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Link className="navbar-brand nav-brand" to="/">
            BIKE-BD
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
              <Link className="nav-link " to="/orders">
                Orders List
              </Link>
              <Link className="nav-link login-btn" to="/login">
                {signedInUser.email ? signedInUser.name : "Login"}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
};

export default Header;