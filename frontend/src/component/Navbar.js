import React, { useState } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import { Col, Input, Button, InputGroup } from "reactstrap";
import UserCard from "../component/UserCard";
import { Link } from "react-router-dom";
const NavBar = () => {

  return (
    <Navbar color="info" light id="mainNavbar" >
      <Container style={{ display: 'flex', flexDirection: "space-between", alignItems: "center" }}>
      <NavbarBrand className="me-auto fw-bold " href="/">
        USERS
      </NavbarBrand>

      <Link className="btn btn-primary" to="/search">
        Search
      </Link>
      <Link className="btn btn-primary m-2" to="/">
        Add
      </Link>
      <Link className="btn btn-primary" to="/view">
        View
      </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
