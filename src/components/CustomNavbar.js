import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from 'reactstrap';
import logo from './../images/Logo.png';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }
  toggleNavbar() {
    this.setState(state => ({ collapsed: !state.collapsed }));
  }
  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
    this.scrollTop();
  }
  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    return (
      <nav className="fixed-top" role="navigation" id="fixedNav">
        <Navbar expand="md" className="navbar-dark bg-primary">
          <NavbarBrand>
            <Link to="/" onClick={this.scrollTop}>
              <h1 className="navLogo">A &amp; S</h1>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mr-auto ml-auto nav-fill">
              <NavItem>
                <NavLink
                  to="/"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Welcome
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/events"
                  exact
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/hotel"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Hotel
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/getting-there"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Getting There
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/our-story"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Our Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/gallery"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/registry"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Registry
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/rsvp"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  <span className="RSVPlink">RSVP</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default CustomNavbar;
