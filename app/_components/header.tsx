"use client";
import React, { useState } from "react";

// @ts-ignore
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "@edx/paragon";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
      <Nav.Link href="/">
        <Image
          src="https://www.edx.org/images/logos/edx-logo-elm.svg"
          alt="edX"
          width={60}
          height={36}
        />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mie-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/faqs">Faqs</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <NavDropdown title="Learn" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Courses</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              Executive Education
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Master's Degrees
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Bachelor's Degrees
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="What do you want to learn?" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
