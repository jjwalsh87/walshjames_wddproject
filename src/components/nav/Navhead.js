import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navhead.css";
import { NavLink } from "react-router-dom";

class Navhead extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
            <NavLink to="/adoption" className="navlink">
              Adoption
            </NavLink>
            <NavLink to="/resources" className="navlink">
              Resources
            </NavLink>
            <NavLink to="/donate" className="navlink">
              Donations
            </NavLink>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navhead;
