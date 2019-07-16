import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import './NavbarCircus.scss';

export default class NavbarCircus extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavbarCircus">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="images/logo.png" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/animaux">Animaux</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tarifs">Tarifs</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}