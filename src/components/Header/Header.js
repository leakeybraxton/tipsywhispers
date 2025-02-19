import React, { useState, useEffect } from "react";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../../src/assets/Logo/Black-logo.png";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownC, setShowDropdownC] = useState(false);
  var className = "inverted";

  const [addClass, setAddClass] = useState("");
  var scrollTrigger = 10;

  useEffect(() => {
    setAddClass();
  }, []);

  window.onscroll = function () {
    setAddClass();
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("nav")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };

  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <header className={addClass}>
        <div className="container-fluid">
          <div className="Header menu-fixed ">
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              className="Justify-content-space-between"
            >
              <Navbar.Brand href="/home" className="nav-logo">
                <Link to="/">
                  <img src={logo} alt="logo" className="mx-auto img-fluid" />
                </Link>
              </Navbar.Brand>
              <Button
                className="btn-navbar navbar-toggle"
                onClick={ToggleSidebar}
              >
                <i class="fa fa-bars" aria-hidden="true"></i>
              </Button>
              <div className={`sidebar ${isOpen === true ? "active" : " "}`}>
                <div id="mySidenav" className="sidenav menu-vertical">
                  <div class="close-nav hidden-md hidden-lg hidden-xl  ">
                    <div>
                      <span>Menu</span>
                    </div>
                    <div>
                      <Button
                        className="closebtn pull-right"
                        onClick={ToggleSidebar}
                      >
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </div>
                  <Nav className="justify-content-center   menu-responive">
                    <Nav.Link className="nav-links" href="#home">
                      <Link to="/home">Home</Link>
                    </Nav.Link>
                    <NavDropdown
                      title="Drinks"
                      id="collasible-nav-dropdown "
                      show={showDropdown}
                      onMouseLeave={() => setShowDropdown(false)}
                      onMouseOver={() => setShowDropdown(true)}
                    >
                      <NavDropdown.Item href="#aboutus">
                        <Link to="/aboutus">Whiskey</Link>{" "}
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#gallery">
                        <Link to="/gallery">Gin</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#faq">
                        <Link to="/faq">Vodka</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#terms">
                        <Link to="/terms">Tequila</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#policy">
                        <Link to="/policy">Wines</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Food"
                      id="collasible-nav-dropdown"
                      show={showDropdownC}
                      onMouseLeave={() => setShowDropdownC(false)}
                      onMouseOver={() => setShowDropdownC(true)}
                    >
                      <NavDropdown.Item href="#course">
                        <Link to="/course">Course</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#singlecourse">
                        <Link to="/singlecourse">Single Course</Link>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="nav-links" href="#event">
                      <Link to="/event">Events</Link>
                    </Nav.Link>

                    <Nav.Link className="nav-links" href="#contact">
                      <Link to="/contact">Contact</Link>
                    </Nav.Link>

                    <Nav.Link className="nav-links" href="blog">
                      <Link to="/blog">Blog</Link>
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
              <div
                className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
                onClick={ToggleSidebar}
              ></div>
              <Link to="/register">
                <i>
                  <BsPerson size={20} /> {/* Adjust the size as needed */}
                </i>
              </Link>
            </Navbar>
          </div>
        </div>
      </header>
    </>
  );
}
