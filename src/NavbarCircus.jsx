import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import { NavLink } from 'react-router-dom';
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
              <NavItem eventKey="Accueil">
                <NavLink activeClassName="active" exact to="/">Accueil</NavLink>
              </NavItem>
              <NavItem eventKey="Animaux">
                <NavLink activeClassName="active" to="/animaux">Animaux</NavLink>
              </NavItem>
              <NavItem eventKey="Spectacles">
                <NavLink activeClassName="active" to="/shows">Spectacles</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}